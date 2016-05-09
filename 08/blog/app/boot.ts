import {bootstrap} from '@angular/platform-browser-dynamic'
import {AppComponent} from './app.component'
import {Http, HTTP_PROVIDERS} from '@angular/http'
import {LoginService} from './service/login'
import {HeadersService} from './service/headers'


bootstrap(AppComponent,[HeadersService, HTTP_PROVIDERS, LoginService]);