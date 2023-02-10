using Interfaces.Event;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace WebApi.Models;

public class EventStatusRequest
{
#pragma warning disable CS8618
    public EventStatusRequest() { }
#pragma warning restore CS8618

    public string Id { get; set; }
    [JsonConverter(typeof(StringEnumConverter))]
    public EventStatus Status { get; set; }
}