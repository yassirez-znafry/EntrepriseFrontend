import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import{LoginPayload} from './login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginPayload;
  

  constructor(private authService :AuthService, private router: Router) {
    this.loginRequestPayload = {
      username: '',
      password: '',
    };
    
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;
    
    

    this.authService.login(this.loginRequestPayload).subscribe((data) => {
      this.authService.isLoginSuccess=true;
      this.router.navigateByUrl('/login-success');
    });
  }

}
