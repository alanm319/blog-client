import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
  authService = inject(AuthService);

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getUsername() {
    return this.authService.getUsername();
  }

  logOut() {
    this.authService.logOut()
  }

}
