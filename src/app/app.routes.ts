import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PostDetail } from './post-detail/post-detail';

export const routes: Routes = [
  {path:'', component: Home, title: 'Home page'},
  {path: 'post/:id', component: PostDetail, title: 'Post'},
];
