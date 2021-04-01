import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  

  constructor(private authService: AuthService, private router: Router, private localST: LocalStorageService) { 
    
  }

  ngOnInit(): void {
    this.authService.loginStatusChange().subscribe(loggedIn => {
    this.isLoggedIn=true;
  });
  }

  goToUserProfile(){
    this.router.navigateByUrl('/profile');
  }

  logout(){
    this.authService.logout();
  }

  
}
