import { Router } from '@angular/router';
import { AuthService } from './../../../../../services/auth.service';
import { Login, UserService } from './../../../../../services/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public fg = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private userService: UserService, private authService:AuthService, private router: Router) {
    
  }
  ngOnInit() {

  }

  submit(event:any) {
    event.preventDefault();
    if (this.fg.invalid) {
      return;
    } else {
      const data: Login = {
        userName : this.fg.get("userName")?.value || "",
        password : this.fg.get("password")?.value || "",
      }
      this.userService.login(data).subscribe(rs => {
        if (rs.success) {
          this.authService.setToken(rs.data);
          this.router.navigateByUrl("/admin")
        }
      })
    }
  }
}
