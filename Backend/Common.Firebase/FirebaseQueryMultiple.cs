using Google.Cloud.Firestore;

namespace Common.Firebase;

public class FirebaseQueryMultiple : FirebaseQuery
{
    public FirebaseQueryMultiple(string property, FilterMethod method, IEnumerable<string> values) : base(property, method)
    {
        Values = values ?? throw new ArgumentNullException(nameof(values));
    }

    public FirebaseQueryMultiple(FieldPath property, FilterMethod method, IEnumerable<string> values) : base(property, method)
    {
        Values = values ?? throw new ArgumentNullException(nameof(values));
    }

    public IEnumerable<string> Values { get; }

    public override T Accept<T>(IFirebaseQueryVisitor<T> visitor) => visitor.Visit(this);
}