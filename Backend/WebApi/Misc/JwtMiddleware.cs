﻿using Interfaces.Account;
using Interfaces.Authentication;
using Microsoft.Extensions.Options;

namespace WebApi.Misc;

public class JwtMiddleware
{
    private readonly RequestDelegate _next;
    private readonly AppSettings _appSettings;

    public JwtMiddleware(RequestDelegate next, IOptions<AppSettings> appSettings)
    {
        _next = next;
        _appSettings = appSettings.Value;
    }

    public async Task Invoke(HttpContext context, IAccountService userService, IJwtUtils jwtUtils)
    {
        var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
        var userId = jwtUtils.ValidateJwtToken(token);
        if (userId != null)
        {
            // attach user to context on successful jwt validation
            
            var result = await userService.TryFindUser(userId);
            context.Items["User"] = (IUser)result.Value;
        }

        await _next(context);
    }
}