using System.ComponentModel.DataAnnotations;
using Interfaces.Event;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace WebApi.Models;

public class EventCatRequest
{
    public EventCatRequest() { }

    [Required]
    [JsonConverter(typeof(StringEnumConverter))]
    public EventCategory Category { get; set; }
}