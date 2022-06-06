import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginService } from '../login/login.service';
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private firebase: AngularFirestore, private login_service: LoginService) { }

  cargarPublicaciones(){
    return this.firebase.collection("publicaciones", ref => ref.orderBy("fecha_publicacion","desc")).valueChanges();
  }

  enviarPublicaciones(){
    this.cargarPublicaciones().subscribe((data)=>{
      this.login_service.getUser()
    })
  }
  enviarPublicacionesByID(id:any){
    return this.firebase.collection("publicaciones", ref => ref.where("emisor","==", id).orderBy("fecha_publicacion","desc")).valueChanges();
  }

  onLike(uid:any,fecha:any){
    const document = this.firebase.collection("publicaciones", ref => ref.where("emisor","==", uid).where("fecha_publicacion","==",fecha)).get();
    document.subscribe((data)=>{
      let publicacion: Publicacion;
      let suscripcion = this.getLikes(data).subscribe((like:any)=>{
        publicacion = like;  
        this.firebase.collection("publicaciones").doc(`${data.docs[0].id}`).update({
          "likes": publicacion.likes + 1
        })
        suscripcion.unsubscribe();
      })
     
    })
      
  }
  
  getLikes(data:any){
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