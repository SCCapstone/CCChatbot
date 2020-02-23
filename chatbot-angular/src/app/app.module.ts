import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module'
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HomePageComponent } from './home-page/home-page.component';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';


// router configuration 
const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'agent', component: AgentPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'chat', component: ChatDialogComponent}, 

  // simple view to show error 404
  { path: '**', component: PageNotFoundComponent }
]; 



import { firebase } from '../environments/firebase.config';
import { LoginComponent } from './auth/login/login.component';
import { LoginService } from './auth/login.service';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AgentPageComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      ),
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  providers: [AngularFirestore, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
