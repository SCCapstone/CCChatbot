import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import * as firebase from 'firebase';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() { }
  download(){
    var gsReference = firebase.storage().refFromURL('gs://acmedemo-tefspy.appspot.com/assets/download.html')

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
          // File doesn't exist
          break;
    
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
      
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });

  }

  ngOnInit() {
    var btn = document.getElementById('download-btn')


    }



}
