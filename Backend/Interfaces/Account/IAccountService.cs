using Common;
using Interfaces.Authentication;

namespace Interfaces.Account
{
    public interface IAccountService
    {
        Task<TryResult<IUser>> TryFindUser(string id); 
        Task<TryResult<IAuthenticateResponse>> TryAuthenticate(IAuthenticateRequest model);
        Task<TryResult> TryRegister(AccessLevel level, IRegisterRequest request);
        Task<IEnumerable<IUser>> GetAllUsers();
        Task<TryResult> Logout(string id);
        Task<TryResult> DeleteUser(string id);
    }
}
