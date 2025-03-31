using Microsoft.EntityFrameworkCore;
using todo_angular_dotnet.Server.Data;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<TodoContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins, policy =>
    {
        policy.WithOrigins("https://localhost:56698") // URL frontendu
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials(); // Pozwala na przesy³anie ciasteczek / tokenów
    });
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins); // Musi byæ PRZED UseAuthorization i UseAuthentication
app.UseAuthentication(); // Jeœli u¿ywasz JWT / Identity, dodaj to
app.UseAuthorization();

app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();
