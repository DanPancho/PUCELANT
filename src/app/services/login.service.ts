import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  auth = firebase.auth;
  constructor(private authF: AngularFireAuth) { }

  async loginGoogle(){
    try{
      
      return await this.authF.signInWithPopup(new this.auth.GoogleAuthProvider());
    }catch(e){
      console.log(e);
      return null;
    }

  }

  async login(correo : string, pass: string){
    try{
      return  await this.authF.createUserWithEmailAndPassword(
        correo,
        pass
      )
    }catch(e){
      console.log(e);
      return null
    }
  }
}
