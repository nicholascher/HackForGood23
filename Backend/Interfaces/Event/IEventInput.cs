namespace Interfaces.Event;

public interface IEventInput
{
    public string Name { get; }
    public string Description { get; }
    public string Url { get; }
    public EventCategory Category { get; }
    public string? SubCategory { get; }
    public DateTime Start { get; }
    public DateTime End { get; }
    public string UserId { get; }
}