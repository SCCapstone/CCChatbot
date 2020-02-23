import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth'
import { LoginService } from './auth/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  constructor(private afAuth: AngularFireAuth,
    private loginService: LoginService) {}
  title = 'CChatbot';

  ngOnInIt() {

  }
}
