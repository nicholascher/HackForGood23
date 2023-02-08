using Interfaces.Account;
using Interfaces.Authentication;

namespace WebApi.Models;

public class AuthenticateResponse : IAuthenticateResponse
{
    public AuthenticateResponse(IAuthenticateResponse response)
    {
        if (response == null) throw new ArgumentNullException(nameof(response));

        Id = response.Id;
        FirstName = response.FirstName;
        LastName = response.LastName;
        Username = response.Username;
        Role = response.Role;
        Token = response.Token;
    }

    public string Id { get; }
    public string FirstName { get; }
    public string LastName { get; }
    public string Username { get; }
    public AccessLevel Role { get; }
    public string Token { get; }
}