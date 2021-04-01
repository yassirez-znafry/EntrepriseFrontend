import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  isTrue = this.authService.isLoginSuccess;

  ngOnInit(): void {
  }

  toHome(){
    this.router.navigateByUrl('/home');
    
  }

  toLogin(){
this.router.navigateByUrl('/login');
  }

}
