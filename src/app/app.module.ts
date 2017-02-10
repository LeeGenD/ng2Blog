import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PostItemComponent } from './post/post-item/post-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    NavigatorComponent,
    PostItemComponent,
    SearchBarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }