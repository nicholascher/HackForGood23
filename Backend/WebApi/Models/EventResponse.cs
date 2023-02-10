using Interfaces.Event;

namespace WebApi.Models;

public class EventResponse : IEvent
{
    public EventResponse(IEvent e) 
    {
        if (e == null) throw new ArgumentNullException(nameof(e));

        Id = e.Id;
        Name = e.Name;
        Description = e.Description;
        Url = e.Url;
        Status = e.Status;
        Category = e.Category;
        SubCategory = e.SubCategory;
        Start = e.Start;
        End = e.End;
        RegisteredUsers = e.RegisteredUsers;
        CreatedAt = e.CreatedAt;
        CreatedBy = e.CreatedBy;
        UpdatedAt = e.UpdatedAt;
        UpdatedBy = e.UpdatedBy;
    }

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