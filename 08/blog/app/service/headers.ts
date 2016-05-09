import {Injectable} from '@angular/core'
import {Headers} from '@angular/http'
 
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