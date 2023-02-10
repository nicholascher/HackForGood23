using Interfaces.Account;
using Interfaces.Event;
using Microsoft.AspNetCore.Mvc;
using WebApi.Misc;
using WebApi.Models;

namespace WebApi.Controllers;

[Authorize]
[Route("[controller]")]
[ApiController]
public class EventController : ControllerBase
{
    private readonly IEventService _eventService;
    private readonly IAccountService _accountService;

    public EventController(IEventService eventService, IAccountService accountService)
    {
        _eventService = eventService ?? throw new ArgumentNullException(nameof(eventService));
        _accountService = accountService ?? throw new ArgumentNullException(nameof(accountService));
    }

    [Authorize(AccessLevel.ORGANISER, AccessLevel.ADMIN)]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    [HttpGet("privilege")]
    public async Task<IActionResult> GetEventCreationPrivilege()
    {
        return Ok("Allowed");
    }

    [Authorize(AccessLevel.USER, AccessLevel.ORGANISER, AccessLevel.ADMIN)]
    [ProducesResponseType(typeof(Collection<EventResponse>), StatusCodes.Status200OK)]
    [HttpGet]
    public async Task<IActionResult> GetEvents()
    {
        var events = await _eventService.GetEvents();
        return Ok(new Collection<EventResponse>(events.Select(x => new EventResponse(x))));
    }

    [Authorize(AccessLevel.USER, AccessLevel.ORGANISER, AccessLevel.ADMIN)]
    [ProducesResponseType(typeof(EventResponse), StatusCodes.Status200OK)]
    [HttpGet("{id}")]
    public async Task<IActionResult> GetEvent(string id)
    {
        var eventResult = await _eventService.TryGetEvent(id);

        if (eventResult.Failure)
        {
            return BadRequest(eventResult.ErrorMessage);
        }

        return Ok(new EventResponse(eventResult.Value));
    }

    [Authorize(AccessLevel.USER, AccessLevel.ORGANISER, AccessLevel.ADMIN)]
    [ProducesResponseType(typeof(Collection<EventResponse>), StatusCodes.Status200OK)]
    [HttpGet("category")]
    public async Task<IActionResult> GetEventCat(EventCatRequest request)
    {
        var eventResult = await _eventService.GetEventByCategory(request.Category);

        return Ok(new Collection<EventResponse>(eventResult.Select(x => new EventResponse(x))));
    }

    [Authorize(AccessLevel.ORGANISER, AccessLevel.ADMIN)]
    [ProducesResponseType(typeof(EventResponse), StatusCodes.Status200OK)]
    [HttpPost("create")]
    public async Task<IActionResult> CreateEvent([FromBody]EventRequest request)
    {
        var result = await _eventService.TryCreateEvent(request);

        if (result.Failure)
        {
            return BadRequest(result.ErrorMessage);
        }

        return Ok(new EventResponse(result.Value));
    }

    [Authorize(AccessLevel.ORGANISER, AccessLevel.ADMIN)]
    [ProducesResponseType(typeof(EventResponse), StatusCodes.Status200OK)]
    [HttpPut("update")]
    public async Task<IActionResult> UpdateEvent(EventRequest input)
    {
        var result = await _eventService.TryUpdateEvent(input.UserId, input);

        if (result.Failure)
        {
            return BadRequest(result.ErrorMessage);
        }

        return Ok("Event updated");
    }

    [Authorize(AccessLevel.ADMIN)]
    [ProducesResponseType(typeof(EventResponse), StatusCodes.Status200OK)]
    [HttpPut("status")]
    public async Task<IActionResult> UpdateEventStatus(EventStatusRequest request)
    {
        var result = await _eventService.TryUpdateEventStatus(request.Id, request.Status);

        if (result.Failure)
        {
            return BadRequest(result.ErrorMessage);
        }

        return Ok("Event updated");
    }

    [Authorize(AccessLevel.ORGANISER, AccessLevel.ADMIN)]
    [ProducesResponseType(typeof(EventResponse), StatusCodes.Status200OK)]
    [HttpDelete("delete")]
    public async Task<IActionResult> UpdateEvent(string id)
    {
        var result = await _eventService.TryDeleteEvent(id);

        if (result.Failure)
        {
            return BadRequest(result.ErrorMessage);
        }

        return Ok("Event deleted");
    }
}