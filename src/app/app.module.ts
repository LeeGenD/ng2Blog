import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PostItemComponent } from './post/post-item/post-item.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    NavigatorComponent,
    PostItemComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }