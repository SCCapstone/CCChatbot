import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs/observable';
import * as firebase from 'firebase';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {  }

  download(){
    var storage = firebase.storage();
    var pathReference = storage.ref('assets/download.html');
  }

}
