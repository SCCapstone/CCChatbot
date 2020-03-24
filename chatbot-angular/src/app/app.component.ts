import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth'
import { LoginService } from './auth/login.service';
import { WebSocketService } from './services/web-socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CChatbot';

  constructor(private afAuth: AngularFireAuth,
    private loginService: LoginService) {}


  ngOnInit() {

  }
}
