namespace Common.Firebase;

public class FirebaseQueryDatetime : FirebaseQuery
{
    public FirebaseQueryDatetime(string property, FilterMethod method, DateTime value) : base(property, method)
    {
        Value = value;
    }

    public DateTime Value { get; }
    public override T Accept<T>(IFirebaseQueryVisitor<T> visitor) => visitor.Visit(this);
}