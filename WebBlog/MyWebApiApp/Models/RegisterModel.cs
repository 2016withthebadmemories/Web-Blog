﻿using System.Net.Sockets;

namespace MyWebApiApp.Models
{
    public class RegisterModel
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}