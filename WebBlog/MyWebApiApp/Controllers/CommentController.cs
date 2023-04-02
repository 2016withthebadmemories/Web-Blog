using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.EntityFrameworkCore;
using MyWebApiApp.Data;
using MyWebApiApp.Models;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using static System.Collections.Specialized.BitVector32;

namespace MyWebApiApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly MyDbContext _dbContext;

        public CommentController(MyDbContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Comment>> GetAll()
        {
            return await _dbContext.Comments.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<Comment> GetById(int id)
        {
            return await _dbContext.Comments.FindAsync(id);
        }

        [HttpPost]
        public async Task Add(CommentModel input)
        {
            DateTime date = DateTime.Now;
            var comment = new Comment
            {
                PostID = input.PostId,
                Name = input.Name,
                Content = input.Content,
                DatePosted = date,
            };
            await _dbContext.AddAsync(comment);
            await _dbContext.SaveChangesAsync();
        }
        [HttpPut]
        public async Task Update(Comment comment)
        {
            _dbContext.Entry(comment).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        [HttpDelete]
        public async Task Delete(int comment)
        {
            var commentId = _dbContext.Comments.Where(x => x.Id == comment).FirstOrDefault();
            _dbContext.Comments.Remove(commentId);
            await _dbContext.SaveChangesAsync();
        }
    }
}