import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  username = 'john';
  
  isLoggedIn() {
    return false;
  }

  logout() {

  }

  login() {

  }

  signUp() {
    
  }

}
