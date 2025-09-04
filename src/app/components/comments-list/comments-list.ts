import { Component, inject } from '@angular/core';
import { Comment } from '../../Comment';
import { CommentsService } from '../../services/comments-service';
import { ActivatedRoute } from '@angular/router';
import { CommentItem } from '../comment-item/comment-item';
@Component({
  selector: 'app-comments-list',
  imports: [CommentItem],
  templateUrl: './comments-list.html',
  styleUrl: './comments-list.css'
})
export class CommentsList {
  route = inject(ActivatedRoute);
  commentsService = inject(CommentsService);
  commentsList: Comment[] = [];
  
  constructor() {
    const postId = Number(this.route.snapshot.params['id']);
    this.commentsService.getComments(postId).subscribe((comments) => {
      console.log(comments);
      this.commentsList = comments
    });
  }
  
}
