import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map'
import {Post} from '../model'
import {HeadersService} from '../service/headers' 
import {LoginService} from '../service/login'

@Injectable()
export class PostService {
    constructor(private _http: Http, private _headerService:HeadersService, private _loginService:LoginService) { }
    public getPosts() {
        return this._http
            .get('./api/posts')
            .map(res => res.json());
    }
    public insert(p:Post){
       return this._http
            .post('./api/posts', JSON.stringify(p),this._headerService.getJsonHeaders(this._loginService.getToken()))
            .map(res => res.json());
    }
    public delete(p:Post){
       return this._http
            .delete('./api/posts/' + p._id ,
            this._headerService.getJsonHeaders(this._loginService.getToken()))
            .map(res => res.json());
    }
}