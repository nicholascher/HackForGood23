using Interfaces.FireBase;

namespace Common.Firebase;

public class ConnectionString : IConnectionString
{
    private readonly string _apiKey;
    private readonly string _authDomain;
    private readonly string _projectId;

    public ConnectionString(string apiKey, string authDomain, string projectId)
    {
        _apiKey = apiKey ?? throw new ArgumentNullException(nameof(apiKey));
        _authDomain = authDomain ?? throw new ArgumentNullException(nameof(authDomain));
        _projectId = projectId ?? throw new ArgumentNullException(nameof(projectId));
    }

    public string GetFirebaseApiKey()
    {
        return _apiKey;
    }

    public string GetFirebaseDomain()
    {
        return _authDomain;
    }

    public string GetFirebaseProjectId()
    {
        return _projectId;
    }
}