namespace Common.Firebase;

public class FirebaseQueryNumber : FirebaseQuery
{
    public FirebaseQueryNumber(string property, FilterMethod method, int value) : base(property, method)
    {
        Value = value;
    }

    public int Value { get; }
    public override T Accept<T>(IFirebaseQueryVisitor<T> visitor) => visitor.Visit(this);
}