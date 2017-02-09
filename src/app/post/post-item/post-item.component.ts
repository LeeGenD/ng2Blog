import { Component,Input } from '@angular/core';
import { Post } from '../post';
@Component({
    selector: 'post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
    @Input() post: Post;
    
    ngOnChanges() {
    }

    ngOnInit() {
    }
};