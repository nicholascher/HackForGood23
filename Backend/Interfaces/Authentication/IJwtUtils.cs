using Interfaces.Account;

namespace Interfaces.Authentication;

public interface IJwtUtils
{
    public string GenerateJwtToken(IUser user);
    public string? ValidateJwtToken(string? token);
}