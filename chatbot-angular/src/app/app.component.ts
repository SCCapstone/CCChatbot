import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { LoginService } from './auth/login.service';
declare const chatMin:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CChatbot';
  callFunc(){
    chatMin();
  }
  constructor(private afAuth: AngularFireAuth,
    private loginService: LoginService) {}


  ngOnInit() {

  }
}
