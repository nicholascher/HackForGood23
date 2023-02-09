namespace Interfaces.Account;

public interface IRegisterRequest
{
    public string FirstName { get; }
    public string LastName { get; }
    public string Email { get; }
    public string Password { get; }
}