import {Component} from '@angular/core'
import {Post} from '../model'
import {LoginService} from '../service/login'
import {Router} from '@angular/router'
import {PostService} from '../service/post'

@Component({
    providers: [PostService],
    template: `

    <div class="col-md-4 col-md-offset-4" *ngIf="showLoading">
        Aguarde...
    </div>
    
    <br />
    
    <div class="col-md-8 col-md-offset-2" *ngIf="!showLoading">
        
    <div *ngIf="errorMessage" class="alert alert-danger" role="alert">
        {{errorMessage}}
    </div>
    
    <div class="panel panel-default">
        <div class="panel-heading">Add Post</div>
        <div class="panel-body">
            <form ngForm>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" required placeholder="Title" [(ngModel)]="post.title">
        </div>
        <div class="form-group">
            <label for="text">Text</label>
            <textarea rows=10 cols=100 class="form-control" id="text" [(ngModel)]="post.text"></textarea>
        </div>
        
        <button type="submit" class="btn btn-default pull-right" (click)="onClick($event)">Create</button>
        </form>
        
        </div>
      </div>
    </div>
    `
})
export class AddPostComponent {

    private post:Post = new Post();
    private errorMessage:string = null;
    private showLoading:boolean = false;
    
    constructor(private _loginService:LoginService,  private _router:Router, private _postService:PostService) {
        if (!_loginService.isLogged())
            this._router.navigate( ['Login'] );
            
        this.post.user = this._loginService.getUser();
    }
    
    onClick(event){
        event.preventDefault();
        this.showLoading = true;  
        this.errorMessage = null;      
        this._postService.insert(this.post).subscribe(
            result => this.onInsertPostResult(result),
            error => this.onInsertPostError(error)
        );
    }
    
    onInsertPostResult(result){
        this._router.navigate( ['Home'] );
    }
    onInsertPostError(error){
        this.showLoading = false; 
        this.errorMessage = error._body;

    }

}