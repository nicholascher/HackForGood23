using Interfaces.Event;

namespace Interfaces.Analytic;

public interface IUserAnalytics
{
    public string Id { get; }
    public EventCategory MostVisitedEventByCategory { get; }
    public IEnumerable<ITimePerCategory> TimePerCategory { get; }
    public int TimeSpentOnSite { get; }
    public double AverageDurationOnSite { get; }
}