using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MyWebApiApp.Data;
using MyWebApiApp.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

//https://jwt.io/

//var jsonData = JSON.parse(responseBody);
//pm.environment.set("TOKEN", jsonData.data);
//Test Login
namespace MyWebApiApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly Appsetting _appsetting;

        public UserController(MyDbContext contex, IOptionsMonitor<Appsetting>
            optionsMonitor)
        {
            _context = contex;
            _appsetting = optionsMonitor.CurrentValue;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var listUser = _context.Users.Select(s => new GetUser
                {
                    UserId = s.UserId,
                    UserName = s.UserName,
                    Password = s.Password,
                    Email = s.Email,
                    FullName = s.FullName
                }).ToList();
                return Ok(listUser);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost("Login")]
        public IActionResult Validate(LoginModel model)
        {
            var user = _context.Users.SingleOrDefault(p => p.UserName ==
            model.UserName && model.Password == p.Password);
            if (user == null) // Không đúng người dùng
            {
                return Ok(new
                {
                    Success = false,
                    Message = "Invalid Username/Password",
                });
            }
            // Cấp Token
            return Ok(new ApiResponse
            {
                Success = true,
                Message = "Authenticate success",
                Data = GenerateToken(user)
            });
        }

        [HttpPost]
        public IActionResult RegisterModel(RegisterModel model)
        {
            try
            {
                var isExist = _context.Users.Where(s => s.UserName == model.UserName).Any();
                if (isExist)
                {
                    return BadRequest();
                }
                var user = new User
                {
                    UserName = model.UserName,
                    Password = model.Password,
                    FullName = model.FullName,
                    Email = model.Email,
                };
                _context.Add(user);
                _context.SaveChanges();
                return Ok(new
                {
                    Success = true,
                    Data = user
                });
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public IActionResult Edit(string id, ChangePasswordModel input)
        {
            try
            {
                var user = _context.Users.SingleOrDefault(hh => hh.UserId == input.Id);
                if (user == null)
                {
                    return NotFound();
                }

                if (id != user.UserId.ToString())
                {
                    return BadRequest();
                }
                // Update
                user.Password = input.Password;
                _context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        private string GenerateToken(User user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();

            var secretKeyBytes = Encoding.UTF8.GetBytes(_appsetting.SecretKey);
            var tokenDescription = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, user.FullName),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim("UserName", user.UserName),
                    new Claim("UserId", user.UserId.ToString()),

                    // Roles

                    new Claim("TokenId", Guid.NewGuid().ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(secretKeyBytes
                ), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = jwtTokenHandler.CreateToken(tokenDescription);

            return jwtTokenHandler.WriteToken(token);
        }
    }
}