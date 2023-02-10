namespace Interfaces.Analytic;

public interface IWebAnalyticsInput
{
    public int Clicks { get; }
    public IEnumerable<IWebClickAnalytics> ClickAnalytics { get; }
}