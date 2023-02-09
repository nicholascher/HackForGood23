using Google.Cloud.Firestore;

namespace Common.Firebase;

public abstract class FirebaseQuery
{
    protected FirebaseQuery(string property, FilterMethod method)
    {
        Property = new FieldPath(property);
        Method = method;
    }

    protected FirebaseQuery(FieldPath property, FilterMethod method)
    {
        Property = property ?? throw new ArgumentNullException(nameof(property));
        Method = method;
    }

    public FieldPath Property { get; }

    public FilterMethod Method { get; }

    public abstract T Accept<T>(IFirebaseQueryVisitor<T> visitor);
}