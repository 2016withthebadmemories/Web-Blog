using System;
using System.Text.RegularExpressions;

namespace MyWebApiApp.Models
{
    public class CommentModel
    {
        public string Name { get; set; }
        public string Content { get; set; }
        public int PostId { get; set; }
        public DateTime DatePosted { get; set; }
    }
}
