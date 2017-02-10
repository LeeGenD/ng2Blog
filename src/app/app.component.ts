import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { PostService } from './post/post.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss')],
  providers: [PostService]
})
export class AppComponent {
 
}