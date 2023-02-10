using Google.Cloud.Firestore;
using Interfaces.Event;

namespace EventManager.Models;

[FirestoreData]
internal class MDEvent : IEvent
{
#pragma warning disable CS8618
    public MDEvent() { }
#pragma warning restore CS8618

    public MDEvent(IEvent e)
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
    public MDEvent(IEvent e, IEventInput input, DateTime now)
    {
        if (e == null) throw new ArgumentNullException(nameof(e));
        if (input == null) throw new ArgumentNullException(nameof(input));

        Id = e.Id;
        Name = input.Name;
        Description = input.Description;
        Url = input.Url;
        Status = e.Status;
        Category = input.Category;
        SubCategory = input.SubCategory;
        Start = input.Start;
        End = input.End;
        RegisteredUsers = e.RegisteredUsers;
        CreatedAt = e.CreatedAt;
        CreatedBy = e.CreatedBy;
        UpdatedAt = now;
        UpdatedBy = e.UpdatedBy;
    }

    private MDEvent(IEventInput input, DateTime now)
    {
        if (input == null) throw new ArgumentNullException(nameof(input));

        Id = 
        Name = input.Name;
        Description = input.Description;
        Url = input.Url;
        Status = EventStatus.NOT_APPROVED;
        Category = input.Category;
        SubCategory = input.SubCategory;
        Start = input.Start;
        End = input.End;
        RegisteredUsers = new List<string>();
        CreatedAt = now;
        CreatedBy = input.UserId;
        UpdatedAt = now;
        UpdatedBy = input.UserId;
    }

    [FirestoreDocumentId]
    public string Id { get; set; }
    [FirestoreProperty]
    public string Name { get; set; }
    [FirestoreProperty]
    public string Description { get; set; }
    [FirestoreProperty]
    public string Url { get; set; }
    [FirestoreProperty]
    public EventStatus Status { get; set; }
    [FirestoreProperty]
    public EventCategory Category { get; set; }
    [FirestoreProperty]
    public string? SubCategory { get; set; }
    [FirestoreProperty]
    public DateTime Start { get; set; }
    [FirestoreProperty]
    public DateTime End { get; set; }
    [FirestoreProperty]
    public IEnumerable<string> RegisteredUsers { get; set; }
    [FirestoreProperty]
    public DateTime CreatedAt { get; set; }
    [FirestoreProperty]
    public string CreatedBy { get; set; }
    [FirestoreProperty]
    public DateTime UpdatedAt { get; set; }
    [FirestoreProperty]
    public string UpdatedBy { get; set; }

    public static MDEvent Create(IEventInput input, DateTime now)
    {
        if (input == null) throw new ArgumentNullException(nameof(input));

        return new MDEvent(input, now);
    }
}