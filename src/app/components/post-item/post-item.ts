import { Component, input} from '@angular/core';
import { Post } from '../../Post'
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-post-item',
  imports: [RouterLink, SlicePipe],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css'
})
export class PostItem {
  postInfo = input.required<Post>();
}
