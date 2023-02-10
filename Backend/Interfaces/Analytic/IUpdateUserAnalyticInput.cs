namespace Interfaces.Analytic;

public interface IUpdateUserAnalyticInput
{
    public IEnumerable<ITimePerCategory> TimePerCategory { get; }
    public int TimeSpentOnSite { get; }
    public double AverageDurationOnSite { get; }
}