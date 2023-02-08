namespace Interfaces.Authentication;

public interface IAuthenticateRequest
{
    public string UserName { get; }
    public string Password { get; }
}