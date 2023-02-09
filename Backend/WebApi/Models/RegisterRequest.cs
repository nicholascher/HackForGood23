using System.ComponentModel.DataAnnotations;
using Interfaces.Account;

namespace WebApi.Models;

public class RegisterRequest : IRegisterRequest
{
#pragma warning disable CS8618
    public RegisterRequest(){ }
#pragma warning restore CS8618

    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }
}