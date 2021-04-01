import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  isTrue = this.authService.isRegistrationSuccess;

  ngOnInit(): void {
  }

  toLogin(){
    this.router.navigateByUrl('/login');
    
  }

  toRegister(){
this.router.navigateByUrl('/sign-up');
  }

}
