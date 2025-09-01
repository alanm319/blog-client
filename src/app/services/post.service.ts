import { Injectable, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  http = inject(HttpClient);
  api_url = environment.api_url;

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api_url}/posts`);
  }

  getPostById(id: number): Observable<Post | undefined> {
    return this.http.get<Post>(`${this.api_url}/posts/${id}`);
  }
}

