import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HomePageComponent } from './home-page/home-page.component';
import { AgentPageComponent } from './agent-page/agent-page.component';


const firebase = {
  apiKey: 'AIzaSyD7d2VTNye12itFkj7rEIz3Mlw7wupdmXA',
  authDomain: 'acmedemo-tefspy.firebaseapp.com',
  dataBaseURL: 'https://acmedemo-tesfpy.firebaseio.com',
  projectId: 'acmedemo-tefspy',
  storageBucket: 'acmedemo-tefspy.appspot.com',
  messagingSenderId: '800812168325',
  appId: '1:800812168325:web:dbf8b9cd42f03d0c50e5ec'
};

//import { firebase } from '../env';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AgentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
