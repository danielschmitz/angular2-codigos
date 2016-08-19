import {Component} from '@angular/core';

import {HomeComponent} from './home/home.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component'

@Component({
    selector: 'my-app',
    template: `
            <h1>My First Angular 2 App</h1>
            <ul>
                <li><a [routerLink]="['/']">Home</a></li>
                <li><a [routerLink]="['/login']">Login</a></li>
                <li><a [routerLink]="['/dashboard']">Dashboard</a></li>
            </ul>
            <div><router-outlet></router-outlet></div>
            `
})
export class AppComponent { }