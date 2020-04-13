import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: firebase.User;

  constructor(
    public service: LoginService
  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe( user=> {
      console.log(user)
      this.user = user;
    })
  }

  loginGoogle() {
    console.log("Login...")
    this.service.signInWithGoogle()
  }

  logout() {
    this.service.logout();
    location.reload(); 
    console.log('test')
  }


}
