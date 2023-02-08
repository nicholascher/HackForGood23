using Interfaces.Account;
using LiteDB;

namespace AccountManager.Models;

public class MDUser : IUser
{
    /// <summary>
    /// DO NOT USE NORMALLY (FOR FIREBASE USE)
    /// </summary>
#pragma warning disable CS8618
    public MDUser() { }
#pragma warning restore CS8618

    public MDUser(IUser user)
    {
        AccessLevel = user.AccessLevel;
        Id = user.Id;
        UserName = user.UserName;
        FirstName = user.FirstName;
        LastName = user.LastName;
        Email = user.Email;
        PasswordHash = user.PasswordHash;
        Token = user.Token;
        CreatedAt = user.CreatedAt;
        UpdatedAt = user.UpdatedAt;
        IsEmailConfirmed = user.IsEmailConfirmed;
    }

    private MDUser(AccessLevel level, IRegisterRequest request, DateTime createdAt, string passwordHash)
    {
        AccessLevel = level;
        Id = ObjectId.NewObjectId().ToString();
        UserName = request.Username;
        FirstName = request.FirstName;
        LastName = request.LastName;
        Email = request.Email;
        CreatedAt = createdAt;
        UpdatedAt = createdAt;
        PasswordHash = passwordHash;
    }

    public AccessLevel AccessLevel { get; set; }
    public string Id { get; set; }
    public string UserName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public string? Token { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public bool IsEmailConfirmed { get; set; }

    public static MDUser CreateUser(AccessLevel level, IRegisterRequest request, DateTime now)
    {
        if (request == null) throw new ArgumentNullException(nameof(request));

        var password = BCrypt.Net.BCrypt.HashPassword(request.Password);

        return new MDUser(level, request, now, password);
    }
}