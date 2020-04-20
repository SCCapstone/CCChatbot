import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: firebase.User;

  constructor(
  private loginservice: LoginService
  ) { }

  ngOnInit() {
    this.loginservice.getLoggedInUser()
    .subscribe(user =>{
      this.user=user;
    })
  }

  logout(){
    this.loginservice.logout();
  }

  

}
