import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class NuevaPublicacionService {
  $modal = new EventEmitter<any>();
  constructor(private firestore: AngularFirestore) { }

  nuevaPublicacion(publicacion:any){
    this.firestore.collection('publicaciones').add(publicacion);
  }



}
