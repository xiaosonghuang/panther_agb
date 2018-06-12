import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AuthRoutesRoutingProviders, AuthRoutesRouting} from './agb.auth.routes';
import { LoginComponent, SignupComponent} from './components';

import {AuthGuard} from './auth-guard';
import {AuthGuardLogin} from './auth-guard-login';
import { LoginService, SignupService, LoginTestingService } from './services';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,

    AuthRoutesRouting
  ],
  providers: [
    AuthGuard,
    AuthGuardLogin,
    AuthRoutesRoutingProviders,

    LoginService,
    SignupService,
    LoginTestingService
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ]
})
export class agbAuthModule { }