import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {VideoListComponent} from './videolist.component'
import {VideoDetailComponent} from './videodetail.component'

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,VideoListComponent,VideoDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
