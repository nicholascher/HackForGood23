namespace Interfaces.Analytic;

public interface IWebClickAnalytics
{
    public string Page { get; }
    public int Clicks { get; }
    public int TotalTimeSpent { get; }
    public int AverageTimeSpent { get; }
}