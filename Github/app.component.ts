import { Component } from '@angular/core';
import { AuthService } from './chat/chat.service.auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService) {}
  title = 'my-app';
}
