using Common;
using Common.Firebase;
using EventManager.Models;
using Google.Cloud.Firestore;
using Interfaces.Event;
using Interfaces.FireBase;

namespace EventManager;

public class EventService : BaseService, IEventService
{
    public EventService(IConnectionString connectionString) : base(connectionString)
    {
    }

    private FirebaseService<MDEvent> Events => GetConnection<MDEvent>(FirebaseCollections.EVENT_COLLECTION);

    public async Task<IEnumerable<IEvent>> GetEvents()
    {
        return await Events.GetAll();
    }

    public async Task<IEnumerable<IEvent>> GetEventByCategory(EventCategory category)
    {
        return await Events.Find(new FirebaseQuery[]
        {
            new FirebaseQueryString(nameof(MDEvent.Category), FilterMethod.EQUAL, category.ToString()),
            new FirebaseQueryMultiple(nameof(MDEvent.Status), FilterMethod.IN, new []{ EventStatus.NOT_STARTED.ToString(), EventStatus.ONGOING.ToString() })
        });
    }

    public async Task<IEnumerable<IEvent>> GetEventBySubCategory(EventCategory category, string subCategory)
    {
        if (subCategory == null) throw new ArgumentNullException(nameof(subCategory));

        return await Events.Find(new FirebaseQuery[]
        {
            new FirebaseQueryString(nameof(MDEvent.Category), FilterMethod.EQUAL, category.ToString()),
            new FirebaseQueryString(nameof(MDEvent.SubCategory), FilterMethod.EQUAL, subCategory),
            new FirebaseQueryMultiple(nameof(MDEvent.Status), FilterMethod.IN, new []{ EventStatus.NOT_STARTED.ToString(), EventStatus.ONGOING.ToString() })
        });
    }

    public async Task<TryResult<IEvent>> TryGetEvent(string id)
    {
        if (id == null) throw new ArgumentNullException(nameof(id));

        var result = await Events.FindOne(new FirebaseQuery[]
        {
            new FirebaseQueryString(FieldPath.DocumentId, FilterMethod.EQUAL, id),
            new FirebaseQueryMultiple(nameof(MDEvent.Status), FilterMethod.IN, new []{ EventStatus.NOT_STARTED.ToString(), EventStatus.ONGOING.ToString() })
        });

        return result != null
            ? TryResult<IEvent>.Pass(result)
            : TryResult<IEvent>.Fail($"Not able to find event with id '{id}'");
    }

    public async Task<TryResult<IEvent>> TryCreateEvent(IEventInput input)
    {
        if (input == null) throw new ArgumentNullException(nameof(input));

        var result = await Events.Insert(MDEvent.Create(input, DateTime.UtcNow));

        return result != null
            ? TryResult<IEvent>.Pass(result)
            : TryResult<IEvent>.Fail("Not able to create event");
    }

    public async Task<TryResult> TryUpdateEventStatus(string id, EventStatus status)
    {
        if (id == null) throw new ArgumentNullException(nameof(id));

        var oldEvent = await Events.FindOne(new[]
            { new FirebaseQueryString(FieldPath.DocumentId, FilterMethod.EQUAL, id) });

        if (oldEvent == null)
        {
            return TryResult.Fail($"Not able to find event with id {id}");
        }

        var result = await Events.UpdateOne(new[]
            { new FirebaseQueryString(FieldPath.DocumentId, FilterMethod.EQUAL, id) },
            new MDEvent(oldEvent) { Status = status, UpdatedAt = DateTime.UtcNow });

        return TryResult.Pass();
    }

    public async Task<TryResult> TryUpdateEvent(string id, IEventInput input)
    {
        var oldEvent = await Events.FindOne(new FirebaseQuery[]
            { 
                new FirebaseQueryString(FieldPath.DocumentId, FilterMethod.EQUAL, id), 
                new FirebaseQueryMultiple(nameof(MDEvent.Status), FilterMethod.IN, new []{ EventStatus.NOT_STARTED.ToString(), EventStatus.ONGOING.ToString() })
            });

        if (oldEvent == null)
        {
            return TryResult.Fail($"Not able to find event with id {id}");
        }

        var result = await Events.UpdateOne(new[]
                { new FirebaseQueryString(FieldPath.DocumentId, FilterMethod.EQUAL, id) },
            new MDEvent(oldEvent, input, DateTime.UtcNow));

        return TryResult.Pass();
    }

    public async Task<TryResult> TryDeleteEvent(string id)
    {
        var result =
            await Events.Delete(new FirebaseQuery[] { new FirebaseQueryString(FieldPath.DocumentId, FilterMethod.EQUAL, id),
                new FirebaseQueryMultiple(nameof(MDEvent.Status), FilterMethod.IN, new []{ EventStatus.NOT_STARTED.ToString(), EventStatus.ONGOING.ToString(), EventStatus.NOT_APPROVED.ToString() }) });

        return result;
    }
}