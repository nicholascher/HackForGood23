using System.ComponentModel.DataAnnotations;
using Interfaces.Authentication;

namespace WebApi.Models;
public class AuthenticateRequest : IAuthenticateRequest
{
#pragma warning disable CS8618
    public AuthenticateRequest() { }
#pragma warning restore CS8618

    [Required]
    public string UserName { get; set; }

    [Required]
    public string Password { get; set; }
}