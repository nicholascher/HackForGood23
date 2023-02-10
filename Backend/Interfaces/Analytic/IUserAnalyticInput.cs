using Interfaces.Event;

namespace Interfaces.Analytic;

public interface IUserAnalyticInput
{
    public string Id { get; }
    public EventCategory MostVisitedEventByCategory { get; }
}