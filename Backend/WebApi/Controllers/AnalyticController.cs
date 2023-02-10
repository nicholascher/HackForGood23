using Microsoft.AspNetCore.Mvc;
using WebApi.Misc;

namespace WebApi.Controllers;

[Authorize]
[Route("[controller]")]
[ApiController]
public class AnalyticController : ControllerBase
{

}