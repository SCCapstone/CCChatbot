import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  error: string;
  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;
this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          }
          else {
            this.userDetails = null;
          }
        }
      );
  }

signUp(email, password){
  this._firebaseAuth.auth.createUserWithEmailAndPassword(email,password)
  .then(res=>{
    console.log("Registered!",res);
  })
  .catch(error=>{
    console.log('Sign up failed',error.message);
  })

  this.router.navigate([''])
}

signIn(email:string, password:string){
  this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  .then((user)=>{
    console.log(user.user.email);
    this.error = '';
  })
  .catch(error=>{
    console.log("Sign in failed ", error.message)
    alert("Sign in failed: " + error.message);
    this.router.navigate(['./login'])
  })
  this.router.navigate(['/'])
}


signInWithGoogle() {
    this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    this.router.navigate(['/'])
  }
isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }

getLoggedInUser() {
  return this._firebaseAuth.authState;
}
}
