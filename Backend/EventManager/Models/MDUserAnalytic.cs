using Google.Cloud.Firestore;
using Interfaces.Analytic;
using Interfaces.Event;

namespace EventManager.Models;

[FirestoreData]
public class MDUserAnalytic : IUserAnalytics
{
#pragma warning disable CS8618
    public MDUserAnalytic() { }
#pragma warning restore CS8618

    [FirestoreDocumentId]
    public string Id { get; set; }
    [FirestoreProperty]
    public EventCategory MostVisitedEventByCategory { get; set; }
    [FirestoreProperty]
    public IEnumerable<ITimePerCategory> TimePerCategory { get; set; }
    [FirestoreProperty]
    public int TimeSpentOnSite { get; set; }
    [FirestoreProperty]
    public double AverageDurationOnSite { get; set; }
}