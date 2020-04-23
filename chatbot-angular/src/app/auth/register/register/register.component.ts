import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: firebase.User;
  email: string;
  password: string;
  displayName: string;

  constructor(public service: LoginService) { }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe( user=> {
      console.log(user)  // TODO: testing, remove after
      this.user = user;
    })
  }

}
