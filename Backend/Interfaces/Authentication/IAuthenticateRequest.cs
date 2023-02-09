namespace Interfaces.Authentication;

public interface IAuthenticateRequest
{
    public string Email { get; }
    public string Password { get; }
}