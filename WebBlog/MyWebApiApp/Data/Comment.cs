using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyWebApiApp.Data
{
    public class Comment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime DatePosted { get; set; }
        public string Name { get; set; }
        public int PostID { get; set; }

        [ForeignKey(nameof(PostID))]
        public Post Post { get; set; }
    }
}