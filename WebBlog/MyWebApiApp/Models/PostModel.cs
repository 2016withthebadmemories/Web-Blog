using MyWebApiApp.Data;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;

namespace MyWebApiApp.Models
{
    public class PostModel
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime DatePosted { get; set; }

        public int AuthorID { get; set; }

        public string Img { get; set; } 
        public int TopicID { get; set; }

    }
}
