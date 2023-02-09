namespace Interfaces.FireBase;

public interface IConnectionString
{
    public string GetFirebaseApiKey();
    public string GetFirebaseDomain();
    public string GetFirebaseProjectId();
}