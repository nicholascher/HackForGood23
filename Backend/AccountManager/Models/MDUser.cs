using Google.Cloud.Firestore;
using Interfaces.Account;

namespace AccountManager.Models;

[FirestoreData]
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
        FirstName = user.FirstName;
        LastName = user.LastName;
        Email = user.Email;
        PasswordHash = user.PasswordHash;
        Token = user.Token;
        CreatedAt = user.CreatedAt;
        UpdatedAt = user.UpdatedAt;
        IsEmailConfirmed = user.IsEmailConfirmed;
        Events = user.Events;
    }

    private MDUser(AccessLevel level, IRegisterRequest request, DateTime createdAt, string passwordHash)
    {
        AccessLevel = level;
        Id = 
        FirstName = request.FirstName;
        LastName = request.LastName;
        Email = request.Email;
        CreatedAt = createdAt;
        UpdatedAt = createdAt;
        PasswordHash = passwordHash;
        Events = Array.Empty<string>();
    }

    [FirestoreDocumentId]
    public string Id { get; set; }
    [FirestoreProperty]
    public AccessLevel AccessLevel { get; set; }
    [FirestoreProperty]
    public string FirstName { get; set; }
    [FirestoreProperty]
    public string LastName { get; set; }
    [FirestoreProperty]
    public string Email { get; set; }
    [FirestoreProperty]
    public string PasswordHash { get; set; }
    [FirestoreProperty]
    public string? Token { get; set; }
    [FirestoreProperty]
    public IEnumerable<string> Events { get; }
    [FirestoreProperty]
    public DateTime CreatedAt { get; set; }
    [FirestoreProperty]
    public DateTime UpdatedAt { get; set; }
    [FirestoreProperty]
    public bool IsEmailConfirmed { get; set; }

    public static MDUser CreateUser(AccessLevel level, IRegisterRequest request, string encryptedPassword, DateTime now)
    {
        if (request == null) throw new ArgumentNullException(nameof(request));
        if (encryptedPassword == null) throw new ArgumentNullException(nameof(encryptedPassword));

        return new MDUser(level, request, now, encryptedPassword);
    }
}