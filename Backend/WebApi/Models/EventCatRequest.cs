using System.ComponentModel.DataAnnotations;

namespace WebApi.Models;

public class EventCatRequest
{
#pragma warning disable CS8618
    public EventCatRequest() { }
#pragma warning restore CS8618

    [Required]
    public int Category { get; set; }
}