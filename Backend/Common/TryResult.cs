namespace Common;

public class TryResult
{
    protected TryResult()
    {
        Success = true;
    }

    protected TryResult(string msg)
    {
        Success = false;
        ErrorMessage = msg;
    }
    protected TryResult(TryResult tryResult)
    {
        Success = tryResult.Success;
        ErrorMessage = tryResult.ErrorMessage;
    }

    public bool Success { get; }
    public bool Failure => !Success;
    public string? ErrorMessage { get; }

    public static TryResult Pass()
    {
        return new TryResult();
    }

    public static TryResult Fail(string msg)
    {
        if (msg == null) throw new ArgumentNullException(nameof(msg));

        return new TryResult(msg);
    }

    public static TryResult Fail(TryResult tryResult)
    {
        if (tryResult == null) throw new ArgumentNullException(nameof(tryResult));

        return new TryResult(tryResult);
    }
}

public class TryResult<T> : TryResult
{
    private TryResult(T value)
    {
        Value = value;
    }

    private TryResult(string msg) : base(msg)
    {
        Value = default!;
    }

    public T Value { get; }

    public static TryResult<T> Pass(T value)
    {
        return new TryResult<T>(value);
    }

    public new static TryResult<T> Fail(string msg)
    {
        return new TryResult<T>(msg);
    }

    public static TryResult<T> Fail<TOther>(TryResult<TOther> tryResult)
    {
        if (tryResult == null) throw new ArgumentNullException(nameof(tryResult));

        return new TryResult<T>(tryResult.ErrorMessage!);
    }
}