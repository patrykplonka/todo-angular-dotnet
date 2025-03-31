using Microsoft.EntityFrameworkCore;
using todo_angular_dotnet.Server.Models;

namespace todo_angular_dotnet.Server.Data
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options) { }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
