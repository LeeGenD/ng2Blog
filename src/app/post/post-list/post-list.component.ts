import { Component,Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
    list: Post[];
    errorMessage: string;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService.getPosts()
        .subscribe(
            postList => this.list = postList,
            error =>  this.errorMessage = <any>error);
    }
};