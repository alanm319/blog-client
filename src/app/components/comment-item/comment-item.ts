import { Component, input} from '@angular/core';
import { Comment } from '../../Comment';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-comment-item',
  imports: [DatePipe],
  templateUrl: './comment-item.html',
  styleUrl: './comment-item.css'
})
export class CommentItem {
  commentInfo = input.required<Comment>();
  
  constructor() {}
}
