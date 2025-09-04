import { Injectable, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Comment } from '../Comment';
@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  http = inject(HttpClient);
  api_url = environment.api_url;

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.api_url}/posts/${postId}/comments`);
  }

  postComment(postId: number, content: string) {
    const body = {content};
    console.log(`sending post to postId: ${postId}, content: ${content}`);
    return this.http.post<Comment>(`${this.api_url}/posts/${postId}/comments`, body);
  }
}

