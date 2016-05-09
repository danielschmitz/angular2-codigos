    import {Http, HTTP_PROVIDERS, Headers} from '@angular/http'
    import {Injectable} from '@angular/core'
    import 'rxjs/add/operator/map'
    import {User} from '../model'
    import {HeadersService} from './headers'


    @Injectable()
    export class UserService {
        constructor(private _http: Http, private _header:HeadersService) {
            
        }
        public insert(u:User) {
        return this._http
                .post('./api/login', JSON.stringify(u),this._header.getJsonHeaders())
                .map(res => res.json());
        }
    }