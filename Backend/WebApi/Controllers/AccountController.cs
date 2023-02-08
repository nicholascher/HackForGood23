using Interfaces.Account;
using Microsoft.AspNetCore.Mvc;
using WebApi.Misc;
using WebApi.Models;
using User = WebApi.Models.User;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService ?? throw new ArgumentNullException(nameof(accountService));
        }

        [AllowAnonymous]
        [ProducesResponseType(typeof(AuthenticateResponse), StatusCodes.Status200OK)]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest model)
        {
            var response = await _accountService.TryAuthenticate(model);
            if (response.Failure)
            {
                return BadRequest(response.ErrorMessage);
            }

            return Ok(new AuthenticateResponse(response.Value));
        }

        [AllowAnonymous]
        [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterRequest model)
        {
            var result = await _accountService.TryRegister(AccessLevel.USER, model);
            if (result.Failure)
            {
                return BadRequest(result.ErrorMessage);
            }
            
            return Ok(new { message = "Registration successful" });
        }

        [ProducesResponseType(typeof(Collection<User>), StatusCodes.Status200OK)]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _accountService.GetAllUsers();
            return Ok(new Collection<User>(users.Select(x => new User(x))));
        }

        [ProducesResponseType(typeof(User), StatusCodes.Status200OK)]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(string id)
        {
            var user = await _accountService.TryFindUser(id);

            if (user.Failure)
            {
                return BadRequest(user.ErrorMessage);
            }

            return Ok(new User(user.Value ?? throw new InvalidOperationException("Should not be null")));
        }

    }
}
