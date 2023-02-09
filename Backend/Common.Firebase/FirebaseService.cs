using Google.Cloud.Firestore;

namespace Common.Firebase;

public class FirebaseService<T>
{
    private readonly FirestoreDbCollectionWrapper _collection;

    public FirebaseService(string firebaseCollection, FirestoreDb client)
    {
        if (firebaseCollection == null) throw new ArgumentNullException(nameof(firebaseCollection));
        if (client == null) throw new ArgumentNullException(nameof(client));

        _collection = new FirestoreDbCollectionWrapper(client, firebaseCollection);
    }

    public async Task<IEnumerable<T>> Find(IEnumerable<FirebaseQuery> queries)
    {
        if (queries == null) throw new ArgumentNullException(nameof(queries));

        var collectionQuery = UseQuery(queries);

        var result = await collectionQuery.GetSnapshotAsync();

        return result.Select(x => x.ConvertTo<T>());
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        var result = await _collection.Collection().GetSnapshotAsync();

        return result.Select(x => x.ConvertTo<T>());
    }

    public async Task<T?> FindOne(IEnumerable<FirebaseQuery> queries)
    {
        if (queries == null) throw new ArgumentNullException(nameof(queries));

        var collectionQuery = UseQuery(queries).Limit(1);

        var result = await collectionQuery.GetSnapshotAsync();

        var obj = result.FirstOrDefault();

        return obj != null
            ? obj.ConvertTo<T>()
            : default;
    }

    public async Task<T?> Insert(T obj)
    {
        var result = await _collection.Collection()
            .AddAsync(obj);

        return result != null 
            ? obj 
            : default;
    }
    public async Task<T> UpdateOne(IEnumerable<FirebaseQuery> queries, T obj)
    {
        var collectionQuery = UseQuery(queries);

        var querySnapshot = await collectionQuery.Limit(1).GetSnapshotAsync();
        var documentId = querySnapshot.Documents.First().Id;

        var document = _collection.Collection().Document(documentId);

        if (document == null)
        {
            throw new InvalidOperationException("Not able to find document");
        }

        var result = await document.SetAsync(obj);

        if (result != null)
        {
            return obj;
        }

        throw new InvalidOperationException($"Encountered an error while updating object of type {typeof(T)}");
    }

    public async Task<TryResult> Delete(IEnumerable<FirebaseQuery> queries)
    {
        try
        {
            var collectionQuery = UseQuery(queries);

            var querySnapshot = await collectionQuery.Limit(1).GetSnapshotAsync();
            var documentId = querySnapshot.Documents.First().Id;

            var document = _collection.Collection().Document(documentId);

            await document.DeleteAsync();
        }
        catch
        {
            return TryResult.Fail($"Failed to delete object of type {typeof(T)} with query");
        }

        return TryResult.Pass();
    }

    private Query UseQuery(IEnumerable<FirebaseQuery> queries)
    {
        if (queries == null) throw new ArgumentNullException(nameof(queries));

        Query? collectionQuery = null;
        var count = 0;
        foreach (var query in queries)
        {
            if (count == 0)
            {
                collectionQuery = query.Accept(new FilterGenerator(_collection.Collection()));

                count++;
                continue;
            }

            collectionQuery = query.Accept(new FilterGeneratorQuery(collectionQuery ?? throw new InvalidOperationException("Should not be null")));
        }

        if (collectionQuery == null)
        {
            throw new InvalidOperationException("Should not be null at this point");
        }

        return collectionQuery;
    }

    private class FirestoreDbCollectionWrapper
    {
        private readonly FirestoreDb _client;
        private readonly string _collectionName;

        public FirestoreDbCollectionWrapper(FirestoreDb client, string collectionName)
        {
            _client = client ?? throw new ArgumentNullException(nameof(client));
            _collectionName = collectionName ?? throw new ArgumentNullException(nameof(collectionName));
        }

        internal CollectionReference Collection()
        {
            return _client.Collection(_collectionName);
        }
    }

    private class FilterGeneratorQuery : IFirebaseQueryVisitor<Query>
    {
        private readonly Query _collection;

        public FilterGeneratorQuery(Query collection)
        {
            _collection = collection ?? throw new ArgumentNullException(nameof(collection));
        }

        public Query Visit(FirebaseQueryString query)
        {
            return Filtering(query.Method, query.Property, query.Value);
        }

        public Query Visit(FirebaseQueryNumber query)
        {
            return Filtering(query.Method, query.Property, query.Value);
        }

        public Query Visit(FirebaseQueryDecimal query)
        {
            return Filtering(query.Method, query.Property, query.Value);
        }

        public Query Visit(FirebaseQueryDatetime query)
        {
            return Filtering(query.Method, query.Property, query.Value);
        }

        private Query Filtering(FilterMethod method, FieldPath property, object value)
        {
            if (value == null) throw new ArgumentNullException(nameof(value));

            return method switch
            {
                FilterMethod.EQUAL => _collection.WhereEqualTo(property, value),
                FilterMethod.LESSER => _collection.WhereLessThan(property, value),
                FilterMethod.GREATER => _collection.WhereGreaterThan(property, value),
                _ => throw new ArgumentOutOfRangeException(nameof(method), method, null)
            };
        }
    }

    private class FilterGenerator : IFirebaseQueryVisitor<Query>
    {
        private readonly CollectionReference _collection;

        public FilterGenerator(CollectionReference collection)
        {
            _collection = collection ?? throw new ArgumentNullException(nameof(collection));
        }

        public Query Visit(FirebaseQueryString query)
        {
            return Filtering(query.Method, query.Property, query.Value);
        }

        public Query Visit(FirebaseQueryNumber query)
        {
            return Filtering(query.Method, query.Property, query.Value);
        }

        public Query Visit(FirebaseQueryDecimal query)
        {
            return Filtering(query.Method, query.Property, query.Value);
        }

        public Query Visit(FirebaseQueryDatetime query)
        {
            return Filtering(query.Method, query.Property, query.Value);
        }

        private Query Filtering(FilterMethod method, FieldPath property, object value)
        {
            if (value == null) throw new ArgumentNullException(nameof(value));

            return method switch
            {
                FilterMethod.EQUAL => _collection.WhereEqualTo(property, value),
                FilterMethod.LESSER => _collection.WhereLessThan(property, value),
                FilterMethod.GREATER => _collection.WhereGreaterThan(property, value),
                _ => throw new ArgumentOutOfRangeException(nameof(method), method, null)
            };
        }
    }
}