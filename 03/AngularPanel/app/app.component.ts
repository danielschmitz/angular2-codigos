import {Component} from 'angular2/core';
import {Panel} from './container'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [Panel]
})
export class AppComponent { }