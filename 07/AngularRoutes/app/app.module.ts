import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HomeComponent} from './home/home.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component'

import { routing,
         appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,HomeComponent,DashboardComponent,LoginComponent ],
  providers:     [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
