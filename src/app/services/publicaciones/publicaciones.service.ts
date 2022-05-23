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
}
