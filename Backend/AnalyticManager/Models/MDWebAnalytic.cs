using Interfaces.Analytic;

namespace AnalyticManager.Models;

public class MDWebAnalytic : IWebAnalytics
{
#pragma warning disable CS8618
    public MDWebAnalytic()
    {
    }
#pragma warning restore CS8618

    public MDWebAnalytic(IWebAnalyticsInput input)
    {
        if (input == null) throw new ArgumentNullException(nameof(input));

        Clicks = input.Clicks;
        ClickAnalytics = input.ClickAnalytics.Select(x => new STWebClickAnalytic(x));
    }

    public int Clicks { get; }
    public IEnumerable<STWebClickAnalytic> ClickAnalytics { get; }

    IEnumerable<IWebClickAnalytics> IWebAnalytics.ClickAnalytics => ClickAnalytics;
}