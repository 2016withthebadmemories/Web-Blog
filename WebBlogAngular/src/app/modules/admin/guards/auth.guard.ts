import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  status: string = "";

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate() {
    this.authService.authToken$.subscribe(state =>
      this.status = state.toString());
    if(this.status != "") {
      return true;
    }

    this.router.navigate(['/admin/login']);
    return false;
  }
}