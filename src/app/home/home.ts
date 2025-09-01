import { Component, inject} from '@angular/core';
import { PostItem } from '../post-item/post-item'
import { Post } from '../Post';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-home',
  imports: [PostItem],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  postCardList: Post[] = []
  postService: PostService = inject(PostService);

  constructor() {
    this.postService.getAllPosts().subscribe((posts) => this.postCardList = posts);
  }
}
