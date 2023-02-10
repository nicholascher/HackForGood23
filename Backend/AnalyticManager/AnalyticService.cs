using AnalyticManager.Models;
using Common;
using Common.Firebase;
using EventManager.Models;
using Interfaces.Analytic;
using Interfaces.FireBase;

namespace AnalyticManager;

public class AnalyticService : BaseService, IAnalyticService
{
    public AnalyticService(IConnectionString connectionString) : base(connectionString)
    {
    }

    private FirebaseService<MDGetInTouch> InTouch => GetConnection<MDGetInTouch>(FirebaseCollections.TOUCH_COLLECTION);
    private FirebaseService<MDUserAnalytic> UserAnalytic => GetConnection<MDUserAnalytic>(FirebaseCollections.USER_ANALYTIC_COLLECTION);
    private FirebaseService<MDWebAnalytic> WebAnalytic => GetConnection<MDWebAnalytic>(FirebaseCollections.WEB_COLLECTION);

    public Task<TryResult<IUserAnalytics>> TryGetUserAnalytics(string id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<IUserAnalytics>> GetUserAnalytics()
    {
        throw new NotImplementedException();
    }

    public Task<TryResult> CreateUserAnalytics(IUserAnalyticInput input)
    {
        throw new NotImplementedException();
    }

    public Task<TryResult> UpdateUserAnalytics(IUpdateUserAnalyticInput input)
    {
        throw new NotImplementedException();
    }

    public Task<IWebAnalytics> GetWebAnalytics()
    {
        throw new NotImplementedException();
    }

    public Task<TryResult> UpdateWebAnalytics(IWebAnalyticsInput input)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<IGetInTouch>> GetInTouch()
    {
        return await InTouch.GetAll();
    }

    public async Task<TryResult> CreateGetInTouch(IGetInTouchInput input)
    {
        var result = await InTouch.Insert(MDGetInTouch.Create(input));

        return result != null
            ? TryResult.Pass()
            : TryResult.Fail("Not able to create in touch form");
    }
}