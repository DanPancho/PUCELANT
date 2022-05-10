import { Injectable } from '@angular/core';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore: AngularFirestore) { }

  cargarMensajes(id: string){ 
    console.log(id)
    return this.firestore.collection("chats",ref =>  ref.where("id", "==" ,id).orderBy("fecha","asc")).valueChanges()
  } 

  agregarMensaje(mensaje: any){
    this.firestore.collection("chats").add(mensaje)
  }

  buscarAmigos(id: string){
    return this.firestore.collection("friends", ref => ref.where("usuario", "==", id)).valueChanges();
  }

 

}
