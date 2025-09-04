import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PostDetail } from './components/post-detail/post-detail';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home page' },
  { path: 'post/:id', component: PostDetail, title: 'Post' },
  { path: 'signup', component: Signup, title: 'Sign Up'},
  { path: 'login', component: Login, title: 'Log In'},
];
