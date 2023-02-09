using Google.Cloud.Firestore;
using Interfaces.FireBase;

namespace Common.Firebase
{
    public abstract class BaseService
    {
        protected readonly IConnectionString ConnectionString;

        protected BaseService(IConnectionString connectionString)
        {
            ConnectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
        }

        protected FirebaseService<T> GetConnection<T>(string collectionName)
        {
            if (collectionName == null) throw new ArgumentNullException(nameof(collectionName));

            return new FirebaseService<T>(collectionName, FirestoreDb.Create(ConnectionString.GetFirebaseProjectId()));
        }
    }
}