using Interfaces.Event;

namespace Interfaces.Analytic;

public interface ITimePerCategory
{
    public EventCategory Category { get; }
    public int MinutesSpend { get; }
}