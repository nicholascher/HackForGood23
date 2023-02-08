using System.ComponentModel;
using System.Runtime.CompilerServices;
using Firebase.Database;
using Firebase.Database.Query;
using Interfaces.FireBase;

namespace Common.Firebase
{
    public abstract class BaseService
    {
        private readonly IConnectionString _connectionString;

        protected BaseService(IConnectionString connectionString)
        {
            _connectionString = connectionString ?? throw new ArgumentNullException(nameof(connectionString));
        }

        protected FirebaseService<T> GetConnection<T>(string collectionName)
        {
            if (collectionName == null) throw new ArgumentNullException(nameof(collectionName));

            return new FirebaseService<T>(collectionName, _connectionString.GetFirebaseDomain());
        }
    }

    public class FirebaseService<T> : FirebaseClient
    {
        private readonly string _firebaseCollection;

        public FirebaseService(string firebaseCollection, string baseUrl, FirebaseOptions? options = null) : base(baseUrl, options)
        {
            _firebaseCollection = firebaseCollection ?? throw new ArgumentNullException(nameof(firebaseCollection));
        }

        public async Task<IReadOnlyCollection<FirebaseObject<T>>> Find(string query)
        {
            if (query == null) throw new ArgumentNullException(nameof(query));

            return await Child(_firebaseCollection)
                .OrderByKey()
                .StartAt(query)
                .OnceAsync<T>();
        }

        public async Task<IReadOnlyCollection<FirebaseObject<T>>> GetAll()
        {
            return await Child(_firebaseCollection)
                .OrderByKey()
                .OnceAsync<T>();
        }

        public async Task<T?> FindOne(string query)
        {
            if (query == null) throw new ArgumentNullException(nameof(query));

            var result = await Child(_firebaseCollection)
                .OrderByKey()
                .StartAt(query)
                .LimitToFirst(1)
                .OnceAsListAsync<T>();

            if (result.Count > 1)
            {
                throw new InvalidOperationException(
                    $"Should not contain 2 similar items when using this query '{query}'");
            }

            var obj = result.FirstOrDefault();

            return obj != null
                ? obj.Object
                : default;
        }

        public async Task<FirebaseObject<T>> Insert(T obj)
        {
            var result = await Child(_firebaseCollection)
                .PostAsync(obj);

            if (result.Object != null)
            {
                return result;
            }

            throw new InvalidOperationException($"Encountered an error while inserting object of type {typeof(T)}");
        }
        public async Task<FirebaseObject<T>> Update(string query, T obj)
        {
            var result = await Child(_firebaseCollection)
                .Child(query)
                .OrderByKey()
                .PostAsync(obj);

            if (result != null)
            {
                return result;
            }

            throw new InvalidOperationException($"Encountered an error while updating object of type {typeof(T)}");
        }

        public async Task<TryResult> Delete(string query)
        {
            try
            {
                await Child(_firebaseCollection)
                    .Child(query)
                    .DeleteAsync();
            }
            catch
            {
                return TryResult.Fail($"Failed to delete object of type {typeof(T)} with query {query}");
            }

            return TryResult.Pass();
        }
    }
}