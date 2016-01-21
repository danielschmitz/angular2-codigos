import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router'
import {HomeComponent} from './home/home.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component'

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
            <h1>My First Angular 2 App</h1>
            <ul>
                <li><a [routerLink]="['/Home']">Home</a></li>
                <li><a [routerLink]="['/Login']">Login</a></li>
                <li><a [routerLink]="['/Dashboard']">Dashboard</a></li>
            </ul>
            <div><router-outlet></router-outlet></div>
            `
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent }
])
export class AppComponent { }