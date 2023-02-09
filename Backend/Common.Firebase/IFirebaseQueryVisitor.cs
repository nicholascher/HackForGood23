namespace Common.Firebase;

public interface IFirebaseQueryVisitor<out T>
{
    T Visit(FirebaseQueryString query);
    T Visit(FirebaseQueryNumber query);
    T Visit(FirebaseQueryDecimal query);
    T Visit(FirebaseQueryDatetime query);
}