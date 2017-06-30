import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Login } from './login.component';
import {AuthService} from "./auth.service";
import {SignupComponent} from "./signup.component";

export const routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    Login,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
  static routes = routes;
}
