import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component'

const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'dashboard',  component: DashboardComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);