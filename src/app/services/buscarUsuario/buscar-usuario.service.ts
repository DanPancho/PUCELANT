import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BuscarUsuarioService {

  constructor(private firestore: AngularFirestore) { }

  buscarUsuario(id: string){
    return this.firestore.collection("usuarios", ref => ref.where("id","==", id)).valueChanges();
  }
}
