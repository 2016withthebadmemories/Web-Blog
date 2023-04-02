using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyWebApiApp.Data;
using MyWebApiApp.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.WebSockets;
using System.Threading.Tasks;

namespace MyWebApiApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicController : ControllerBase
    {
        private readonly MyDbContext _dbContext;

        public TopicController(MyDbContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public async Task<List<Topic>> GetAllAsync()
        {
            return await _dbContext.Set<Topic>().ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<Topic> GetByIdAsync(int id)
        {
            return await _dbContext.Set<Topic>().FindAsync(id);
        }

        [HttpPost]
        public async Task AddAsync(Topic topic)
        {
            await _dbContext.Set<Topic>().AddAsync(topic);
            await _dbContext.SaveChangesAsync();
        }

        [HttpPut]
        public async Task UpdateAsync(Topic topic)
        {
            _dbContext.Entry(topic).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        [HttpDelete]
        public async Task DeleteAsync(int id)
        {
            var topic = await GetByIdAsync(id);

            _dbContext.Set<Topic>().Remove(topic);
            await _dbContext.SaveChangesAsync();
        }
        [HttpGet("topicId={topicId}")]
        public async Task<List<PostModel>> GetPostByTopic(int topicId)
        {
            var post = _dbContext.Posts.Where(x => x.TopicID == topicId)
                .Select(x => new PostModel
                {
                    Id = x.Id,
                    TopicID = x.TopicID,
                    AuthorID = x.AuthorID,
                    Content = x.Content,
                    Title = x.Title,
                    Img = x.Img,
                }).ToListAsync();
            return await post;
        }
    }
}