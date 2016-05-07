import {Component} from '@angular/core';
import {Panel} from './container'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [Panel]
})
export class AppComponent { }