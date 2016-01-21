import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map'
import {User} from '../model'

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    public getUsers() {
        return this.http
            .get('./users.json')
            .map(res => res.json());
    }
    
    public addUser(u:User){
        return this.http
            .post('./addUser',JSON.stringify(u))
            .map(res => res.json());
    }
}