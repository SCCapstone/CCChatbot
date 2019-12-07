import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  calendarItems: any[];

  constructor(public afAuth: AngularFireAuth) {  //Initialize angular fire auth
    this.initClient(); //Initalize gapi
    this.user$ = afAuth.authState;
  }

  initClient() {
    gapi.load('client', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: 'AIzaSyD7d2VTNye12itFkj7rEIz3Mlw7wupdmXA', // found in the firebase console 
        clientId: '800812168325-646ik9au8ccid0nvurkpigfnkcj0e8nb.apps.googleusercontent.com', //google cloud platform console under Apis and Services tab
        discoveryDocs: ['https//www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.google.apis.com/auth/calendar'
      })

      gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));

    });
  }
    async login() {
      const googleAuth = gapi.auth2.getAuthInstance()
      const googleUser = await googleAuth.signIn();

      const token = googleUser.getAuthResponse().id_token; // access token

      console.log(googleUser)

      const credential = auth.GoogleAuthProvider.credential(token);

      await this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
    }

    logout() {
      this.afAuth.auth.signOut();
    }

    async getCalendar() {
      const events = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime'
      })

      console.log(events)

      this.calendarItems = events.result.items;

    }

    async insertEvent() {
      const insert = await gapi.client.calendar.events.insert({
        calendarId: 'primary',
        start: {
          dateTime: hoursFromNow(2),
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: hoursFromNow(3),
          timeZone: 'America/New_York'
        },
        summary: 'Test',
        description: 'This is a test'
      })

      await this.getCalendar();

    }

  }
const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60).toISOString();
