import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

interface LoginFormValue {
  username: string,
  password: string,
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  authService = inject(AuthService);
  router = inject(Router);

  protected errorMessage = '';

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  // TODO: refactor
  logIn() {
    const {username, password} = this.loginForm.value as LoginFormValue;
    this.authService.logIn(username, password).subscribe({
      next: (response) => {
        const token = response.token;
        this.authService.setToken(token);
        this.authService.setUsername(username);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error?.message || 'Something went wrong';
      }
    });
  }
}
