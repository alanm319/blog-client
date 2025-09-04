import { Component } from '@angular/core';
import { CommentForm } from '../comment-form/comment-form';
import { CommentsList } from '../comments-list/comments-list';

@Component({
  selector: 'app-comment-section',
  imports: [CommentForm, CommentsList],
  templateUrl: './comment-section.html',
  styleUrl: './comment-section.css'
})
export class CommentSection {
}
