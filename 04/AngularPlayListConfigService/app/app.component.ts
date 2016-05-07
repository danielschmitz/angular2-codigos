import {Component} from '@angular/core'
import {Config} from './config.service'
import {Video} from './video'
import {VideoListComponent} from './videolist.component'
import {VideoDetailComponent} from './videodetail.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [VideoListComponent,VideoDetailComponent]
})
export class AppComponent { 
    
    title:string;
    videos : Array<Video>;
    selectedVideo: Video;
    
    constructor(_config:Config){
        this.title = _config.TITLE_PAGE;
        
        this.videos = [
            new Video(1,"Building apps with Firebase and Angular 2 - Sara Robinson","http://www.youtube.com/embed/RD0xYicNcaY","Firebase is a powerful platform for building mobile and web applications. Use Firebase to store and sync data instantly, authenticate users, and easily deploy your web app. In this talk, you’ll learn how you can use Firebase to add a backend to your Angular app in minutes. Sara will demonstrate how to get started with Firebase and Angular 2. At the end she’ll risk it all by live coding and deploying an app with Firebase and Angular!"),
            new Video(2,"Better concepts, less code in Angular 2 - Victor Savkin and Tobias Bosch","http://www.youtube.com/embed/4YmnbGoh49U","Learn how Angular 2 makes hard problems simple by introducing new powerful concepts.")
        ]
    }
    
    onSelectVideo(video){
        //console.log(JSON.stringify(video));
        this.selectedVideo = video;
    }
    
    onCloseDetailForm(event){
        this.selectedVideo = null;
    }
    
    newVideo(){
        var v : Video = new Video(this.videos.length+1,"A new video");
        this.videos.push(v);
        this.selectedVideo = v;
    }
}