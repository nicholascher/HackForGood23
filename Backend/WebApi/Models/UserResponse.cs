using Interfaces.Account;

namespace WebApi.Models;

public class UserResponse
{
    public UserResponse(IUser user)
    {
        if (user == null) throw new ArgumentNullException(nameof(user));

        Id = user.Id;
        FirstName = user.FirstName;
        LastName = user.LastName;
        Email = user.Email;
        CreatedAt = user.CreatedAt;
        UpdatedAt = user.UpdatedAt;
    }
    
    public string Id { get; }
    public string FirstName { get; }
    public string LastName { get; }
    public string Email { get; }
    public DateTime CreatedAt { get; }
    public DateTime UpdatedAt { get; }
}