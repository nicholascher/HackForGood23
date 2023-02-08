using Interfaces.FireBase;

namespace Common;

public class ConnectionString : IConnectionString
{
    private readonly string _apiKey;
    private readonly string _authDomain;

    public ConnectionString(string apiKey, string authDomain)
    {
        _apiKey = apiKey ?? throw new ArgumentNullException(nameof(apiKey));
        _authDomain = authDomain ?? throw new ArgumentNullException(nameof(authDomain));
    }

    public string GetFirebaseApiKey()
    {
        return _apiKey;
    }

    public string GetFirebaseDomain()
    {
        return _authDomain;
    }
}