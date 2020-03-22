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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';

import { firebase } from '../environments/firebase.config';
import { LoginComponent } from './auth/login/login.component';
import { LoginService } from './auth/login.service';
import { RegisterComponent } from './auth/register/register/register.component';
import { DownloadComponent } from './download/download.component';


// router configuration 
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agent', component: AgentPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'chat', component: ChatDialogComponent}, 
  { path: 'register', component: RegisterComponent},

  // simple view to show error 404
  { path: '**', component: PageNotFoundComponent }
]; 



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AgentPageComponent,
    LoginComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DownloadComponent,
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
