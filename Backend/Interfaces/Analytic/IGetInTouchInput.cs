namespace Interfaces.Analytic;

public interface IGetInTouchInput
{
    public string Name { get; }
    public string Company { get; }
    public string Email { get; }
    public string Phone { get; }
    public string Reason { get; }
    public string FindOut { get; }
    public string Remarks { get; }
}