import {Component, EventEmitter} from 'angular2/core';
import {Video} from './video'

@Component({
    selector: 'video-list',
    templateUrl: 'app/videolist.component.html',
    inputs: ['videos'],
    outputs: ['selectVideo']
})
export class VideoListComponent {
    private selectVideo = new EventEmitter();
     
    onSelect(vid: Video) { 
         this.selectVideo.next(vid);
    }
}