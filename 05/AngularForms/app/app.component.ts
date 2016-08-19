import {Component} from '@angular/core'
import {Mock} from './mock'
import {Person} from './model'
import {Mock} from './mock'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [Mock]
})
export class AppComponent {
    user:Person;
    submitted:boolean;
    
    constructor(_mock:Mock){
        this.submitted = false;
        this.user = _mock.mike;    
    }
    
    onSubmit(f){
        this.submitted = true;
        console.log("sending... " + JSON.stringify(this.user));
    }
    
 }