namespace Interfaces.Analytic;

public interface IWebAnalytics
{
    public int Clicks { get; }
    public IEnumerable<IWebClickAnalytics> ClickAnalytics { get; }
}