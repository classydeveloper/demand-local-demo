import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {AuthGuard} from "./auth/auth.gaurd";


export const ROUTES: Routes = [{
   path: '', redirectTo: 'auth', pathMatch: 'full'
  }, {
    path: 'app',   loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]
  }, {
    path: 'auth', loadChildren: './auth/auth.module#AuthModule'
  }, {
    path: 'error', component: ErrorComponent
  }, {
    path: '**',    component: ErrorComponent
  }
];
