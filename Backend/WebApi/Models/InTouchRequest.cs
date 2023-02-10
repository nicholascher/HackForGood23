using Interfaces.Analytic;

namespace WebApi.Models;

public class InTouchRequest : IGetInTouchInput
{
#pragma warning disable CS8618
    public InTouchRequest() { }
#pragma warning restore CS8618

    public string Name { get; set; }
    public string Company { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string Reason { get; set; }
    public string FindOut { get; set; }
    public string Remarks { get; set; }
}