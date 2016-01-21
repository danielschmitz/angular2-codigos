import {bootstrap} from 'angular2/platform/browser'
import {Config} from './config.service'
import {AppComponent} from './app.component'

bootstrap(AppComponent, [Config]);