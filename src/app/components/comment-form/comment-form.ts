import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { CommentsService } from '../../services/comments-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-comment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './comment-form.html',
  styleUrl: './comment-form.css'
})
export class CommentForm {
  commentsService = inject(CommentsService);
  route = inject(ActivatedRoute);

  commentForm = new FormGroup({
    comment: new FormControl('', Validators.required),
  });
  
  get comment() {
    return this.commentForm.get('comment');
  }

  postComment() {
    const postId = this.route.snapshot.params['id'];
    const content = this.commentForm.get('comment')?.value;
    console.log(`postId: ${postId}, content: ${content}`);
    if (!content) return;
    this.commentsService.postComment(postId, content).subscribe({
      next: (response) => {
        location.reload();
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  clearComment() {
    this.commentForm.reset();
  }
}
