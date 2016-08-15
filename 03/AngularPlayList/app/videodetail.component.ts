import {Component, EventEmitter} from '@angular/core'
import {Video} from './video'
import { FormsModule }   from '@angular/forms'

@Component({
    selector:'video-detail',
    templateUrl: 'app/videodetail.component.html',
    inputs: ['video'],
    outputs: ['closeForm']
})
export class VideoDetailComponent{
    private closeForm = new EventEmitter();
    private editTitle:boolean = false;
    onTitleClick(){
        this.editTitle=true;
    }
    onButtonOkClick(){
        this.closeForm.next({});
    }
    ngOnChanges(){
        this.editTitle=false;
    }
}