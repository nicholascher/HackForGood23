using Interfaces.Account;
using Interfaces.Analytic;
using Microsoft.AspNetCore.Mvc;
using WebApi.Misc;
using WebApi.Models;

namespace WebApi.Controllers;

[Authorize]
[Route("[controller]")]
[ApiController]
public class AnalyticController : ControllerBase
{
    private readonly IAnalyticService _analyticService;

    public AnalyticController(IAnalyticService analyticService)
    {
        _analyticService = analyticService ?? throw new ArgumentNullException(nameof(analyticService));
    }

    [Authorize(AccessLevel.USER, AccessLevel.ORGANISER, AccessLevel.ADMIN)]
    [ProducesResponseType(typeof(Collection<EventResponse>), StatusCodes.Status200OK)]
    [HttpGet]
    public async Task<IActionResult> CreateInTouchForm(InTouchRequest request)
    {
        var inTouch = await _analyticService.CreateGetInTouch(request);

        if (inTouch.Failure)
        {
            return BadRequest(inTouch.ErrorMessage);
        }

        return Ok("Form sent");
    }
}