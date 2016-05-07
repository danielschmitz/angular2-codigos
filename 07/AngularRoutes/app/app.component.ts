import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component'

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
            <h1>My First Angular 2 App</h1>
            <ul>
                <li><a [routerLink]="['/home']">Home</a></li>
                <li><a [routerLink]="['/login']">Login</a></li>
                <li><a [routerLink]="['/dashboard']">Dashboard</a></li>
            </ul>
            <div><router-outlet></router-outlet></div>
            `
})
@Routes([
    { path: '/home', component: HomeComponent },
    { path: '/login', component: LoginComponent },
    { path: '/dashboard',  component: DashboardComponent }
])
export class AppComponent { }