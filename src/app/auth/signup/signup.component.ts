import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupRequestPayload } from './singup-request.payload';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupRequestPayload: SignupRequestPayload;
  signupForm: FormGroup;
  

  constructor(private authService: AuthService, private router: Router) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: '',
    };
    
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  signup() {
    this.signupRequestPayload.email = this.signupForm.get('email').value;
    this.signupRequestPayload.username = this.signupForm.get('username').value;
    this.signupRequestPayload.password = this.signupForm.get('password').value;


    this.authService.signup(this.signupRequestPayload)
      .subscribe(data => {
        console.log('register success');
        this.authService.isRegistrationSuccess=true;
        this.router.navigateByUrl('/register-success');
      }, error=>{
        console.log('register failed');
        this.authService.isRegistrationSuccess=false;
        this.router.navigateByUrl('/register-success');
      });
  }
}