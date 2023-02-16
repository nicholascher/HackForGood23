using Interfaces.Account;
using Interfaces.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using WebApi.Misc;
using WebApi.Models;
using UserResponse = WebApi.Models.UserResponse;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IJwtUtils _jwtUtils;
        private readonly IAccountService _accountService;

        public AccountController(IJwtUtils jwtUtils, IAccountService accountService)
        {
            _jwtUtils = jwtUtils ?? throw new ArgumentNullException(nameof(jwtUtils));
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

        [Authorize(AccessLevel.ADMIN)]
        [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]
        [HttpPost("register/organiser")]
        public async Task<IActionResult> RegisterOrganiser(RegisterRequest model)
        {
            var result = await _accountService.TryRegister(AccessLevel.ORGANISER, model);
            if (result.Failure)
            {
                return BadRequest(result.ErrorMessage);
            }

            return Ok(new { message = "Registration successful" });
        }

        [Authorize(AccessLevel.ADMIN)]
        [ProducesResponseType(typeof(Collection<UserResponse>), StatusCodes.Status200OK)]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _accountService.GetAllUsers();
            return Ok(new Collection<UserResponse>(users.Select(x => new UserResponse(x))));
        }

        [Authorize(AccessLevel.USER, AccessLevel.ORGANISER)]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status200OK)]
        [HttpGet("id/{id}")]
        public async Task<IActionResult> GetUser(string id)
        {
            var user = await _accountService.TryFindUser(id);

            if (user.Failure)
            {
                return BadRequest(user.ErrorMessage);
            }

            return Ok(new UserResponse(user.Value ?? throw new InvalidOperationException("Should not be null")));
        }

        [Authorize(AccessLevel.USER, AccessLevel.ORGANISER)]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status200OK)]
        [HttpGet("token/{token}")]
        public async Task<IActionResult> GetUserByToken(string token)
        {
            var user = await _accountService.TryFindUserByToken(token);

            if (user.Failure)
            {
                return BadRequest(user.ErrorMessage);
            }

            return Ok(new UserResponse(user.Value ?? throw new InvalidOperationException("Should not be null")));
        }

        [Authorize(AccessLevel.USER, AccessLevel.ORGANISER)]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status200OK)]
        [HttpGet("logout")]
        public async Task<IActionResult> Logout(string token)
        {
            var userId = _jwtUtils.ValidateJwtToken(token);
            if (userId == null)
            {
                return BadRequest("Token is not valid");
            }

            var result= await _accountService.Logout(userId);

            if (result.Failure)
            {
                return BadRequest(result.ErrorMessage);
            }

            return Ok("Logged out");
        }

    }
}
