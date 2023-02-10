namespace Interfaces.Analytic;

public interface IGetInTouch
{
    public string Id { get; }
    public string Name { get; }
    public string Company { get; }
    public string Email { get; }
    public string Phone { get; }
    public string Reason { get; }
    public string FindOut { get; }
    public string Remarks { get; }
}