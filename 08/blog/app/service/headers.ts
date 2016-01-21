import {Injectable} from 'angular2/core'
import {Headers} from 'angular2/http'
 
@Injectable()
export class HeadersService {
    constructor(){}
	
	getJsonHeaders(token?:string){
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token)
            headers.append('x-access-token',token)
		return {headers: headers};
	}
}