import {Component} from 'angular2/core'
import {User} from '../model' 
import {UserService} from '../service/user'
import {LoginService} from '../service/login'
import {Router} from 'angular2/router';


@Component({
    providers: [UserService],
    template: `
    
    <div class="col-md-4 col-md-offset-4" *ngIf="!showLoading">
    
    <div *ngIf="errorMessage" class="alert alert-danger" role="alert">
        {{errorMessage}}
    </div>
    
    <form ngForm>
        <div class="form-group">
            <label for="login">Login</label>
            <input type="text" class="form-control" id="login" required placeholder="Login" [(ngModel)]="user.login">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" required placeholder="Password" [(ngModel)]="user.password">
        </div>
        <div class="checkbox">
            <label>
            <input id="createAccount" type="checkbox" [(ngModel)]="user.isNew"> Create Account?
            </label>
        </div>
        <div class="form-group" *ngIf="user.isNew">
            <label for="login">Your Name</label>
            <input type="text" class="form-control" id="name" placeholder="Your Name" [(ngModel)]="user.name">
        </div>
        
        <button type="submit" class="btn btn-default pull-right" (click)="onClick($event)" >Login</button>
        
    </form>
    </div>
    
    <div class="col-md-4 col-md-offset-4" *ngIf="showLoading">
        Aguarde...
    </div>
     `
})
export class LoginComponent { 
    private user:User=new User();
    private showLoading:boolean = false;
    private errorMessage:string = null;
    constructor(private userService:UserService, private loginService:LoginService, private router:Router){
        
    }
    onClick(event){
        event.preventDefault();
        this.showLoading = true;  
        this.errorMessage = null;      
        this.userService.insert(this.user).subscribe(
            result => this.onLoginResult(result),
            error => this.onLoginError(error)
        );
    }
    onLoginResult(result){
        console.log(result);
        this.loginService.setLogin(result.user,result.token);
        this.router.navigate( ['Home'] );
    }
    onLoginError(error){
        this.showLoading = false; 
        this.errorMessage = error._body;
    }
}