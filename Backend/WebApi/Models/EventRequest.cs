using System.ComponentModel.DataAnnotations;
using Interfaces.Event;

namespace WebApi.Models;

public class EventRequest : IEventInput
{
#pragma warning disable CS8618
    public EventRequest() { }
#pragma warning restore CS8618

    [Required]
    public string Name { get; set; }
    [Required]
    public string Description { get; set; }
    public string Url { get; set; }
    [Required]
    public EventCategory Category { get; set; }
    public string? SubCategory { get; set; }
    [Required]
    public DateTime Start { get; set; }
    [Required]
    public DateTime End { get; set; }
    [Required]
    public string UserId { get; set; }
}