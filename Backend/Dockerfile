FROM mcr.microsoft.com/dotnet/aspnet:6.0 as base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 as build
WORKDIR /src
COPY . .
# Restore as distinct layers
RUN dotnet restore "WebApi/WebApi.csproj"
WORKDIR "/src/WebApi"
# Build and publish a release
RUN dotnet build "WebApi.csproj" -c Release -o /app

FROM build AS publish
WORKDIR "/src/WebApi"
RUN dotnet publish "WebApi.csproj" -c Release -o /app

FROM base as final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT [ "dotnet", "WebApi.dll"]
