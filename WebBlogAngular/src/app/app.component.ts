import { AuthService } from 'src/services/auth.service';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    const token = localStorage.getItem("token") || ""
    if (token != "") {
      this.authService.setToken(token)
    }
  }
}
