using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApiApp.Data
{
    public class Post
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public DateTime DatePosted { get; set; }

        public int AuthorID { get; set; }

        [ForeignKey(nameof(AuthorID))]
        public User Author { get; set; }

        public int TopicID { get; set; }

        [ForeignKey(nameof(TopicID))]
        public Topic Topic { get; set; }
        public string Img { get; set; }
    }
}