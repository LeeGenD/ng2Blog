import { Component,Input } from '@angular/core';
import { Post } from '../post';
@Component({
    selector: 'post-item',
    templateUrl: './post-item.component.html',
    styles: [ require('./post-item.component.scss') ]
})
export class PostItemComponent {
    @Input() post: Post;
    
    ngOnChanges() {
    }

    ngOnInit() {
    }
};