namespace Interfaces.Enterprise
{
    public interface IEnterprise
    {
        public string Id { get; }
        public string Name { get; }
        public DateTime CreatedAt { get; }
        public DateTime UpdatedAt { get; }
    }
}
