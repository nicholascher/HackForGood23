using Common;

namespace Interfaces.Event;

public interface IEventService
{
    public Task<IEnumerable<IEvent>> GetEvents();
    public Task<IEnumerable<IEvent>> GetEventByCategory(EventCategory category);
    public Task<IEnumerable<IEvent>> GetEventBySubCategory(EventCategory category, string subCategory);
    public Task<TryResult<IEvent>> TryGetEvent(string id);
    public Task<TryResult<IEvent>> TryCreateEvent(IEventInput input);
    public Task<TryResult> TryUpdateEventStatus(string id, EventStatus status);
    public Task<TryResult> TryUpdateEvent(string id, IEventInput input);
    public Task<TryResult> TryDeleteEvent(string id);
}