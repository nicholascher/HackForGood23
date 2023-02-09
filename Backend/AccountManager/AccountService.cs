using AccountManager.Models;
using Common;
using Common.Firebase;
using Google.Cloud.Firestore;
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
            var user = await Users.FindOne(new[] { new FirebaseQueryString(FieldPath.DocumentId, FilterMethod.EQUAL, id) });

            return user != null
                ? TryResult<IUser>.Pass(user)
                : TryResult<IUser>.Fail($"Not able to find user with id '{id}'");
        }

        public async Task<TryResult<IAuthenticateResponse>> TryAuthenticate(IAuthenticateRequest model)
        {
            var user = await TryGetUserByEmail(model.Email);
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
            var result = await Users.UpdateOne(
                new[] { new FirebaseQueryString(FieldPath.DocumentId, FilterMethod.EQUAL, user.Value.Id) },
                new MDUser(user.Value) { Token = jwtToken, UpdatedAt = now });
            
            if (result == null)
            {
                throw new AppException("Error while updating user token");
            }

            return TryResult<IAuthenticateResponse>.Pass(new AuthenticateResponse(user.Value, jwtToken));
        }

        public async Task<TryResult> TryRegister(AccessLevel level, IRegisterRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            var now = DateTime.UtcNow;

            // Check if email is taken
            var userNameTaken = await TryGetUserByEmail(request.Email);
            if (userNameTaken.Success)
            {
                return TryResult.Fail($"There already exists Email {request.Email}");
            }

            // Create a new user
            var newUser = MDUser.CreateUser(level, request, now);

            var result = await Users.Insert(newUser);

            // Return true only if there is an object returned from the db storing process
            return result != null
                ? TryResult.Pass()
                : TryResult.Fail("Not able to create user");
        }

        public async Task<IEnumerable<IUser>> GetAllUsers()
        {
            return await Users.GetAll();
        }

        private async Task<TryResult<IUser>> TryGetUserByEmail(string email)
        {
            var result = await Users.FindOne(new[] { new FirebaseQueryString(nameof(MDUser.Email), FilterMethod.EQUAL, email) });

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
                Role = user.AccessLevel;
                Token = token;
            }

            public string Id { get; }
            public string FirstName { get; }
            public string LastName { get; }
            public AccessLevel Role { get; }
            public string Token { get; }
        }
    }
}
