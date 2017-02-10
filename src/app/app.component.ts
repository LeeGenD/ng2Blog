import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { Post } from './post/post';
import { PostService } from './post/post.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  list: Post[];
  errorMessage: string;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(
        postList => this.list = postList,
        error =>  this.errorMessage = <any>error);
  }
}