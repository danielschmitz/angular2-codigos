import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LoginService} from './service/login'
import {HeadersService} from './service/headers'


bootstrap(AppComponent,[HeadersService, HTTP_PROVIDERS, LoginService]);