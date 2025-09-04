import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../Post';
import { CommentSection } from '../comment-section/comment-section';

@Component({
  selector: 'app-post-detail',
  imports: [CommentSection],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css'
})
export class PostDetail {
  route: ActivatedRoute = inject(ActivatedRoute);
  postService: PostService = inject(PostService);
  post: Post | undefined;

  constructor() {
    const postId = Number(this.route.snapshot.params['id']);
    this.postService.getPostById(postId).subscribe((post) => this.post = post);
  }
}
