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

    [AllowAnonymous]
    [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
    [HttpPost()]
    public async Task<IActionResult> CreateInTouchForm([FromBody]InTouchRequest request)
    {
        var inTouch = await _analyticService.CreateGetInTouch(request);

        if (inTouch.Failure)
        {
            return BadRequest(inTouch.ErrorMessage);
        }

        return Ok("Form sent");
    }
}