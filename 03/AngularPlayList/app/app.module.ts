import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {VideoListComponent} from './videolist.component'
import {VideoDetailComponent} from './videodetail.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,VideoListComponent,VideoDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }