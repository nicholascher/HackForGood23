using System.Data;
using Interfaces.Account;

namespace Interfaces.Authentication;

public interface IAuthenticateResponse
{
    public string Id { get; }
    public string FirstName { get; }
    public string LastName { get; }
    public string Username { get; }
    public AccessLevel Role { get; }
    public string Token { get; }
}