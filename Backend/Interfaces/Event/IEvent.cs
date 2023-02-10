namespace Interfaces.Event;

public interface IEvent
{
    public string Id { get; }
    public string Name { get; }
    public string Description { get; }
    public string Url { get; }
    public EventStatus Status { get; }
    public EventCategory Category { get; }
    public string? SubCategory { get; }
    public DateTime Start { get; }
    public DateTime End { get; }
    public IEnumerable<string> RegisteredUsers { get; }
    public DateTime CreatedAt { get; }
    public string CreatedBy { get; }
    public DateTime UpdatedAt { get; }
    public string UpdatedBy { get; }
}