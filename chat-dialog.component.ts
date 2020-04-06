import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import {firestoreExport} from 'node-firestore-import-export';
import * as firebase from 'firebase-admin';

const FileSaver = require('file-saver');
firebase.initializeApp(firebaseConfig);
const collectionRef = firebase.firestore().collection('collectionA/docB/collectionC');

var firebaseConfig = {
  apiKey: "AIzaSyC95dOFfDphP70AdAHfPvlUHE_Yl7BWA6w",
  authDomain: "acmedemo-tefspy.firebaseapp.com",
  databaseURL: "https://acmedemo-tefspy.firebaseio.com",
  projectId: "acmedemo-tefspy",
  storageBucket: "acmedemo-tefspy.appspot.com",
  messagingSenderId: "800812168325",
  appId: "1:800812168325:web:dbf8b9cd42f03d0c50e5ec"
};

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService) { }

  ngOnInit() {
    // appends to an array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  exportChat(){
    firestoreExport(collectionRef).then(data=>console.log(data));
  }
}
