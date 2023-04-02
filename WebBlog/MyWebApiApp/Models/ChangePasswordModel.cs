using System.ComponentModel.DataAnnotations;

namespace MyWebApiApp.Models
{
    public class ChangePasswordModel
    {
        public int Id { get; set; }
        public string Password { get; set; }
    }

    public class GetUser
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
    }
}