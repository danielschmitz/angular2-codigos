import {Video} from './video'

export class Playlist{
    videos:Array<Video>;
    count():number{
        return this.videos.length;
    }
}