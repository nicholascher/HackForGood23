using Google.Cloud.Firestore;

namespace Common.Firebase;

public class FirebaseQueryString : FirebaseQuery
{
    public FirebaseQueryString(string property, FilterMethod method, string value) : base(property, method)
    {
        Value = value ?? throw new ArgumentNullException(nameof(value));
    }

    // Only used by document id
    public FirebaseQueryString(FieldPath property, FilterMethod method, string value) : base(property, method)
    {
        Value = value ?? throw new ArgumentNullException(nameof(value));
    }

    public string Value { get; }
    public override T Accept<T>(IFirebaseQueryVisitor<T> visitor) => visitor.Visit(this);
}