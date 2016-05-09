import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router'
import {HomeComponent,LoginComponent,AddPostComponent} from './component'
import {User} from './model/user'
import {LoginService} from './service/login'

@Component({
    selector: 'my-app',
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES],
    templateUrl:'appComponent.html',
  
})
@Routes([
    { path: '/', component: HomeComponent },
    { path: '/Login',  component: LoginComponent },
    { path: '/Addpost', component: AddPostComponent }    
])
export class AppComponent {
    
    public title: string = "Blog";
    constructor(private _loginService:LoginService){
           
    }
    
}