import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { CreateOfferComponent } from './offer/create-offer/create-offer.component';
import{HttpClientInterceptor} from 'src/app/http-client-interceptor';
import { ViewOfferComponent } from './offer/view-offer/view-offer.component';
import { PostulerComponent } from './candidat/postuler/postuler.component';
import { ViewCandidatsComponent } from './profile/view-candidats/view-candidats.component';
import { LoginSuccessComponent } from './auth/login-success/login-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    RegisterSuccessComponent,
    HomeComponent,
    CreateOfferComponent,
    ViewOfferComponent,
    PostulerComponent,
    ViewCandidatsComponent,
    LoginSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'sign-up', component: SignupComponent},
      {path: 'login-success', component: LoginSuccessComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      { path: 'create-offer', component: CreateOfferComponent},
      {path: '', component: HomeComponent},
      { path: 'view-offer/:id', component: ViewOfferComponent },
      { path: 'postuler/:offerId', component: PostulerComponent },
      { path: 'profile', component: ViewCandidatsComponent },

    ]),
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
