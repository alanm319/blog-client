import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  signUp(username: string, password: string): Observable<any> {
    const body = {username, password};
    return this.http.post(`${environment.api_url}/auth/signup`, body);
  }

  logIn(username: string, password: string): Observable<LoginResponse>  {
    const body = {username, password};
    return this.http.post<LoginResponse>(`${environment.api_url}/auth/login`, body);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return !(localStorage.getItem('token') == null);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  setUsername(username: string) {
    localStorage.setItem('username', username);
  }
}
