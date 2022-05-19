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
    return this.firestore.collection("chats",ref =>  ref.where("id", "==" ,id).orderBy("fecha","asc")).valueChanges()
  } 

  agregarMensaje(mensaje: any){
    this.firestore.collection("chats").add(mensaje)
  }

  buscarAmigos(id: string){
    console.log(id + " EL QUE ENTRA")
    return this.firestore.collection("friends", ref => ref.where("usuario", "==", id)).valueChanges();
  }

  newUser(id: string){
    // Se crea en la coleccion su id con sus amigos 
    // Creacion de susario
    let user = {
      usuario: id,
      amigos: []
    }
    this.firestore.collection("friends").add(user);
  }
  nuevoUsuario(id: string,img: string, nombre: string){
    // Se crea en la coleccion su id con sus amigos 
    // Creacion de susario
    let user = {
      id: id,
      img: img,
      nombre: nombre
    }
    this.firestore.collection("usuarios").add(user);
    this.newUser(id)
  }
  

}
