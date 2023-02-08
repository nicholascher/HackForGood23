using AccountManager.Models;
using Common;
using Common.Firebase;
using Interfaces.Account;
using Interfaces.Authentication;
using Interfaces.FireBase;
using Microsoft.Extensions.Logging;

namespace AccountManager
{
    public class AccountService : BaseService, IAccountService
    {
        private readonly IJwtUtils _jwtUtils;
        private readonly ILogger _logger;

        public AccountService(ILoggerFactory loggerFactory, IJwtUtils jwtUtils, IConnectionString connectionString) : base(connectionString)
        {
            if (loggerFactory == null) throw new ArgumentNullException(nameof(loggerFactory));

            _jwtUtils = jwtUtils ?? throw new ArgumentNullException(nameof(jwtUtils));
            _logger = loggerFactory.CreateLogger("AccountServices");
        }

        private FirebaseService<MDUser> Users => GetConnection<MDUser>(FirebaseCollections.USER_COLLECTION);

        public async Task<TryResult<IUser>> TryFindUser(string id)
        {
            var user = await Users.FindOne(id);

            return user != null
                ? TryResult<IUser>.Pass(user)
                : TryResult<IUser>.Fail($"Not able to find user with id '{id}'");
        }

        public async Task<TryResult<IAuthenticateResponse>> TryAuthenticate(IAuthenticateRequest model)
        {
            var user = await TryGetUserByUserName(model.UserName);
            if (user.Failure)
            {
                return TryResult<IAuthenticateResponse>.Fail(user);
            }

            // validate
            if (!BCrypt.Net.BCrypt.Verify(model.Password, user.Value.PasswordHash))
            {
                throw new AppException("Username or password is incorrect");
            }

            // authentication successful so generate jwt token
            var jwtToken = _jwtUtils.GenerateJwtToken(user.Value);

            var now = DateTime.UtcNow;

            // save the token and user
            var result = await Users.Update(user.Value.Id, new MDUser(user.Value) { Token = jwtToken, UpdatedAt = now });
            if (result.Object == null)
            {
                throw new AppException("Error while updating user token");
            }

            return TryResult<IAuthenticateResponse>.Pass(new AuthenticateResponse(user.Value, jwtToken));
        }

        public async Task<TryResult> TryRegister(AccessLevel level, IRegisterRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            var now = DateTime.UtcNow;

            // Check if username is taken
            var userNameTaken = await TryGetUserByUserName(request.Username);
            if (userNameTaken.Success)
            {
                return TryResult.Fail($"There already exists UserName {request.Username}");
            }

            // Check if email is used
            var emailTaken = await TryGetUserByEmail(request.Email);
            if (emailTaken.Success)
            {
                return TryResult.Fail($"There already exists Email {request.Email}");
            }

            // Create a new user
            var newUser = MDUser.CreateUser(level, request, now);

            var result = await Users.Insert(newUser);

            // Return true only if there is an object returned from the db storing process
            return result.Object != null
                ? TryResult.Pass()
                : TryResult.Fail("Not able to create user");
        }

        public async Task<IEnumerable<IUser>> GetAllUsers()
        {
            var results = await Users.GetAll();

            return results.Select(x => x.Object);
        }

        private async Task<TryResult<IUser>> TryGetUserByUserName(string userName)
        {
            var result = await Users.FindOne(userName);

            return result != null
                ? TryResult<IUser>.Pass(result)
                : TryResult<IUser>.Fail($"Not able to find user with UserName {userName}");
        }

        private async Task<TryResult<IUser>> TryGetUserByEmail(string email)
        {
            var result = await Users.FindOne(email);

            return result != null
                ? TryResult<IUser>.Pass(result)
                : TryResult<IUser>.Fail($"Not able to find user with Email {email}");
        }

        private class AuthenticateResponse : IAuthenticateResponse
        {
            public AuthenticateResponse(IUser user, string token)
            {
                Id = user.Id;
                FirstName = user.FirstName;
                LastName = user.LastName;
                Username = user.UserName;
                Role = user.AccessLevel;
                Token = token;
            }

            public string Id { get; }
            public string FirstName { get; }
            public string LastName { get; }
            public string Username { get; }
            public AccessLevel Role { get; }
            public string Token { get; }
        }
    }
}
