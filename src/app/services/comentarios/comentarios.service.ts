import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { comentario } from 'src/app/interfaces/comentario';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  $modal = new EventEmitter<any>();
  data: any;
  constructor(private firebase: AngularFirestore) { }

  cargarData(coment: comentario){
    this.data = coment;
  }

  obtenerData(){
    return this.data;
  }

  onComent(datos: comentario, comentario :string){
    const document = this.firebase.collection("publicaciones", ref => ref.where("emisor","==", datos.uid).where("fecha_publicacion","==",datos.fecha)).get();
    document.subscribe((data)=>{
      let publicacion: Publicacion;
      let comentarios : string[];
      let suscripcion = this.getComets(data).subscribe((coment:any)=>{
        publicacion = coment;  
        comentarios = publicacion.comentarios;
        comentarios.push(comentario);
        this.firebase.collection("publicaciones").doc(`${data.docs[0].id}`).update({
          "comentarios": comentarios
        })
        suscripcion.unsubscribe();
      })
     
    })
      
  }
  
  getComets(data:any){
    return this.firebase.collection("publicaciones").doc(`${data.docs[0].id}`).valueChanges();
  }
}


interface Publicacion{
  comentarios: string[],
  emisor: string,
  fecha_publicacion: Date,
  img: string,
  img_user: string,
  likes: number,
  nombre_user: string,
  texto: string,
}