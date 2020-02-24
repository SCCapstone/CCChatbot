import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from 'firebase';

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
  
  constructor(
    private service: LoginService
  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe( user=> {
      console.log(user)  // TODO: testing, remove after
      this.user = user;
    })
  }

  register(){
    this.service.signUp(this.email, this.password);
    this.email="jahrede@gmail.com";
    this.password="123456";

  }

}
