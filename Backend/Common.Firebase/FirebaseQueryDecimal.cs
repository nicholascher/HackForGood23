namespace Common.Firebase;

public class FirebaseQueryDecimal : FirebaseQuery
{
    public FirebaseQueryDecimal(string property, FilterMethod method, double value) : base(property, method)
    {
        Value = value;
    }

    public double Value { get; }
    public override T Accept<T>(IFirebaseQueryVisitor<T> visitor) => visitor.Visit(this);
}