import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PostItemComponent } from './post/post-item/post-item.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // { path: 'posts' },
  // { path: 'category' },
  { path: 'post/:id',  component: PostDetailComponent },
  {
    path: 'other', component: OtherPageComponent
  },
  { path: '', component: PostListComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    NavigatorComponent,
    PostItemComponent,
    SearchBarComponent,
    PostListComponent,
    PostDetailComponent,
    OtherPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }