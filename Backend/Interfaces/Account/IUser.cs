namespace Interfaces.Account
{
    public enum AccessLevel
    {
        GUEST = 0,
        USER = 10,
        COMPANY = 20,
        ADMIN = 99,
    }

    public interface IUser
    {
        public AccessLevel AccessLevel { get; }
        public string Id { get; }
        public string FirstName { get; }
        public string LastName { get; }
        public string Email { get; }
        public string PasswordHash { get; }
        public string? Token { get; }
        public DateTime CreatedAt { get; }
        public DateTime UpdatedAt { get; }
        public bool IsEmailConfirmed { get; }
    }
}
