import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{SignupRequestPayload} from './auth/signup/singup-request.payload';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import{LoginPayload} from './auth/login/login-payload';
import {map} from 'rxjs/operators';
import{JwtAutResponse} from './auth/jwt-aut-response';
import{LocalStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/auth/';
  public isRegistrationSuccess = false;
  public isLoginSuccess = false;
  private loggedIn: Subject<boolean> = new ReplaySubject<boolean>(1);


  constructor(private httpClient: HttpClient, private localStoraqeService: LocalStorageService,
    private router: Router) { }

  signup(registerPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }



  login(loginPayload: LoginPayload): Observable<boolean> {
    
    return this.httpClient.post('http://localhost:8080/api/auth/login', loginPayload, { responseType: 'text'}).pipe(map(data => {
      this.localStoraqeService.store('authenticationToken', data);
      this.localStoraqeService.store('username', loginPayload.username);
      this.loggedIn.next(true);
      this.router.navigateByUrl('/home');
      return true;
    }));
  }


  loginStatusChange(): Observable<boolean> {
  return this.loggedIn.asObservable();
}

logout(){
  this.localStoraqeService.clear('authenticationToken');
  this.localStoraqeService.clear('username');
}
  
  



}
