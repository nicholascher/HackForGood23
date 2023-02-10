using Google.Cloud.Firestore;
using Interfaces.Analytic;

namespace AnalyticManager.Models;

[FirestoreData]
public class MDGetInTouch :IGetInTouch
{
#pragma warning disable CS8618
    public MDGetInTouch() { }
#pragma warning restore CS8618

    private MDGetInTouch(IGetInTouchInput input)
    {
        if (input == null) throw new ArgumentNullException(nameof(input));

        Id =
        Name = input.Name;
        Company = input.Company;
        Email = input.Email;
        Phone = input.Phone;
        Reason = input.Reason;
        FindOut = input.FindOut;
        Remarks = input.Remarks;
    }
    [FirestoreProperty]
    public string Id { get; set; }
    [FirestoreProperty]
    public string Name { get; set; }
    [FirestoreProperty]
    public string Company { get; set; }
    [FirestoreProperty]
    public string Email { get; set; }
    [FirestoreProperty]
    public string Phone { get; set; }
    [FirestoreProperty]
    public string Reason { get; set; }
    [FirestoreProperty]
    public string FindOut { get; set; }
    [FirestoreProperty]
    public string Remarks { get; set; }

    public static MDGetInTouch Create(IGetInTouchInput input)
    {
        return new MDGetInTouch(input);
    }
}