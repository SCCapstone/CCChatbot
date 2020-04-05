import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import * as firebase from 'firebase';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() { }


  ngOnInit() {


    }

    // function pulled from firebase docs, not working
    downloadFirebase(){
      
      var gsReference = firebase.storage().ref('assets/test.txt')
      var url = 'insert URL here'
      gsReference.getDownloadURL().then(function(url){
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
          var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
      }).catch(function(error){
        switch (error.code) {
          case 'storage/object-not-found':
            console.log('object not found')
            break;
      
          case 'storage/unauthorized':
            console.log('you are not authorized to access')
            break;
        
          case 'storage/unknown':
            console.log('unknown error') 
            break;
        }
      });
  
    }

    // working download function to download necessary code for a working chatbot in angular
    download(){
      console.log("download local started")
      const url = 'https://firebasestorage.googleapis.com/v0/b/acmedemo-tefspy.appspot.com/o/chat.zip?alt=media&token=855febd2-76b4-4277-88ae-5704b5520d96'
      const name = 'chatbot'
      FileSaver.saveAs(url, name)

    }



}
