using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyWebApiApp.Data;
using MyWebApiApp.Models;
using System.Collections.Generic;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Net.WebSockets;

namespace MyWebApiApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly MyDbContext _dbContext;

        public PostController(MyDbContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Post>> GetAll()
        {
            return await _dbContext.Posts.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<Post> GetById(int id)
        {
            return await _dbContext.Posts.FindAsync(id);
        }

        [HttpPost]
        public async Task Add(PostModel input)
        {
            DateTime date = DateTime.Now;
            var post = new Post
            {
                AuthorID = 2,
                TopicID = input.TopicID,
                Title = input.Title,
                Content = input.Content,
                DatePosted = date,
                Img = input.Img
            };
            await _dbContext.AddAsync(post);
            await _dbContext.SaveChangesAsync();
        }       

        [HttpPut]
        public async Task Update(Post post)
        {
            _dbContext.Entry(post).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        [HttpDelete]
        public async Task Delete(int post)
        {
            var postId = _dbContext.Posts.Where(x => x.Id == post).FirstOrDefault();
            _dbContext.Posts.Remove(postId);
            await _dbContext.SaveChangesAsync();
        }
        [HttpGet("postId={postId}")]
        public async Task<List<CommentModel>> GetCommentOfPost(int postId)
        {
            return await _dbContext.Comments.Where(x => x.PostID == postId)
                .Select(x => new CommentModel
                {
                    Name = x.Name,
                    Content = x.Content,
                    DatePosted = x.DatePosted
                }).ToListAsync();
        }
        [HttpGet("search={text}")]
        public async Task<List<PostModel>> SearchPostByTitle(string text)
        {
            return await _dbContext.Posts.Where(x => x.Title.Contains(text))
                .Select(x => new PostModel
                {
                    AuthorID = x.AuthorID,
                    TopicID = x.TopicID,
                    Title = x.Title,
                    Content = x.Content,
                    DatePosted = x.DatePosted,
                    Img = x.Img
                }).ToListAsync();
        }
    }
}