using Interfaces.Account;
using Interfaces.Authentication;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace WebApi.Models;

public class AuthenticateResponse : IAuthenticateResponse
{
    public AuthenticateResponse(IAuthenticateResponse response)
    {
        if (response == null) throw new ArgumentNullException(nameof(response));

        Id = response.Id;
        FirstName = response.FirstName;
        LastName = response.LastName;
        Role = response.Role;
        Token = response.Token;
    }

    public string Id { get; }
    public string FirstName { get; }
    public string LastName { get; }

    [JsonConverter(typeof(StringEnumConverter))]
    public AccessLevel Role { get; }
    public string Token { get; }
}