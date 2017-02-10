import { Component,Input } from '@angular/core';
import { Post } from '../post';
@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
    post: Post = {
        title: 'title',
        desc: 'desc'
    };
};