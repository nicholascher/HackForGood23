using Interfaces.Account;

namespace WebApi.Models;

public class User
{
    public User(IUser user)
    {
        if (user == null) throw new ArgumentNullException(nameof(user));

        Id = user.Id;
        UserName = user.UserName;
        FirstName = user.FirstName;
        LastName = user.LastName;
        Email = user.Email;
        CreatedAt = user.CreatedAt;
        UpdatedAt = user.UpdatedAt;
    }
    
    public string Id { get; }
    public string UserName { get; }
    public string FirstName { get; }
    public string LastName { get; }
    public string Email { get; }
    public DateTime CreatedAt { get; }
    public DateTime UpdatedAt { get; }
}