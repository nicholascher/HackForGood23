using System.ComponentModel.DataAnnotations;
using Interfaces.Analytic;

namespace WebApi.Models;

public class InTouchRequest : IGetInTouchInput
{
#pragma warning disable CS8618
    public InTouchRequest() { }
#pragma warning restore CS8618

    [Required]
    public string Name { get; set; }
    [Required]
    public string Company { get; set; }
    [Required]
    public string Email { get; set; }
    [Required]
    public string Phone { get; set; }
    [Required]
    public string Reason { get; set; }
    [Required]
    public string FindOut { get; set; }
    [Required]
    public string Remarks { get; set; }
}