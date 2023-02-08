namespace WebApi.Models;

public class Collection<T>
{
    public Collection(IEnumerable<T> values)
    {
        Values = values ?? throw new ArgumentNullException(nameof(values));
    }

    public IEnumerable<T> Values { get; }
}