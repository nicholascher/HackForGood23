using Interfaces.Analytic;

namespace EventManager.Models;

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

public class STWebClickAnalytic : IWebClickAnalytics
{
#pragma warning disable CS8618
    public STWebClickAnalytic() { }
#pragma warning restore CS8618

    public STWebClickAnalytic(IWebClickAnalytics click)
    {
        if (click == null) throw new ArgumentNullException(nameof(click));

        Page = click.Page;
        Clicks = click.Clicks;
        TotalTimeSpent = click.TotalTimeSpent;
        AverageTimeSpent = click.AverageTimeSpent;
    }

    public string Page { get; set; }
    public int Clicks { get; set; }
    public int TotalTimeSpent { get; set; }
    public int AverageTimeSpent { get; set; }
}