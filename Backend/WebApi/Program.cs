using AccountManager;
using Common;
using Common.Firebase;
using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Google.Cloud.Firestore.V1;
using Interfaces.Account;
using Interfaces.Authentication;
using Interfaces.FireBase;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using WebApi;
using WebApi.Misc;
using static System.Net.Mime.MediaTypeNames;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
builder.Services.AddScoped<IJwtUtils, JwtUtils>();
builder.Services.AddScoped<IAccountService, AccountService>();

builder.Services.AddSingleton(LoggerFactory.Create(loggingBuilder =>
{
    loggingBuilder.AddConsole()
        .AddDebug()
        .AddEventLog()
        .SetMinimumLevel(LogLevel.Debug);
}));

// ReSharper disable once StringLiteralTypo
var credentialPath = Directory.GetCurrentDirectory() + "\\firebaseConfig.json";
Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", credentialPath);

FirebaseApp.Create(new AppOptions()
{
    Credential = GoogleCredential.FromFile(Directory.GetCurrentDirectory() + "\\firebaseConfig.json"),
});

builder.Services.AddSingleton<IConnectionString>(
    new ConnectionString(
        builder.Configuration.GetSection("ConnectionString").GetSection("apiKey").Value, 
    builder.Configuration.GetSection("ConnectionString").GetSection("authDomain").Value,
        builder.Configuration.GetSection("ConnectionString").GetSection("projectId").Value));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddScheme<AuthenticationSchemeOptions, FirebaseAuthHandler>(JwtBearerDefaults.AuthenticationScheme, (o) => { });

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else if (app.Environment.IsProduction())
{

}

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.UseHttpsRedirection(); 

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

// global error handler
app.UseMiddleware<ErrorHandlerMiddleware>();

// custom jwt auth middleware
app.UseMiddleware<JwtMiddleware>();

app.Logger.LogInformation("Adding Routes");
app.Logger.LogInformation("Starting the app");

app.MapControllers();

app.Run();
