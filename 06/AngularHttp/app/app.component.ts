import {Component} from 'angular2/core'
import {User} from './model'
import {UserService} from './service'

@Component({
    selector: 'my-app',
    providers: [UserService],
    template: `
    <ul>
        <li *ngFor="#u of users">
            {{u.id}} - {{u.name}}
        </li>
    </ul>
    `
})
export class AppComponent {

    public users:Array<User>;
        
    constructor(userService:UserService){
         userService.getUsers()
            .subscribe(users => this.users = users);
    }
 }