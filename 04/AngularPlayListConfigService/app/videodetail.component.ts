import {Component, EventEmitter} from 'angular2/core'
import {Video} from './video'

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