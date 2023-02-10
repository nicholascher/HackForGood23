using Common;

namespace Interfaces.Analytic;

public interface IAnalyticService
{
    public Task<TryResult<IUserAnalytics>> TryGetUserAnalytics(string id);
    public Task<IEnumerable<IUserAnalytics>> GetUserAnalytics();
    public Task<TryResult> CreateUserAnalytics(IUserAnalyticInput input);
    public Task<TryResult> UpdateUserAnalytics(IUpdateUserAnalyticInput input);
    public Task<IWebAnalytics> GetWebAnalytics();
    public Task<TryResult> UpdateWebAnalytics(IWebAnalyticsInput input);
    public Task<IEnumerable<IGetInTouch>> GetInTouch();
    public Task<TryResult> CreateGetInTouch(IGetInTouchInput input);
}

public interface IGetInTouch
{
    public string Id { get; }
    public string Name { get; }
    public string Company { get; }
    public string Email { get; }
    public string Phone { get; }
    public string Reason { get; }
    public string FindOut { get; }
    public string Remarks { get; }
}

public interface IGetInTouchInput
{
    public string Name { get; }
    public string Company { get; }
    public string Email { get; }
    public string Phone { get; }
    public string Reason { get; }
    public string FindOut { get; }
    public string Remarks { get; }
}