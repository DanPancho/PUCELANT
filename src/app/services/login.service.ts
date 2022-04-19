import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  auth = firebase.auth;
  public chats: any[] = [];
  itemsCollection:any;
  constructor(private authF: AngularFireAuth, private firestore: AngularFirestore) {
    this.itemsCollection = null;
  }

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

  getUser(){
    return this.authF.authState;
  }

  logout(){
    this.authF.signOut();
  }

  cargarMensajes(){ 
    //this.itemsCollection = this.firestore.collection<any>('chats', ref => ref.orderBy('fecha',"desc"))
    //console.log("CARGAR MENSAJES -> " + this.itemsCollection)
    return this.firestore.collection("chats",ref => ref.orderBy("fecha","asc")).valueChanges()
  } 

  agregarMensaje(mensaje: any){
    this.firestore.collection("chats").add(mensaje)
  }
}
