import { Component, OnInit } from '@angular/core';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { PublicacionesService } from '../services/publicaciones/publicaciones.service';
import { ChatService } from '../services/chat/chat.service';
import { LoginService } from '../services/login/login.service';
import { ComentariosService } from '../services/comentarios/comentarios.service';
import { comentario } from '../interfaces/comentario';
import { NuevaPublicacionService } from '../services/nuevaPublicacion/nueva-publicacion.service';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  publicaciones: any[] = [];
  like: any;
  modal:boolean;
  constructor( private nueva_publicacion_service: NuevaPublicacionService,private comentarios_service:ComentariosService, private service_publicaciones:PublicacionesService, private service_chat: ChatService, private service_login: LoginService){
    // Verificar si es un nuevo usuario -> Buscar el id en la tabla de amigos 
    this.modal = false;
    let userid:any;
    let username:  any;
    let imguser: any; 
    this.service_login.getUser().subscribe((dataUser)=>{
      userid = dataUser?.uid;
      username = dataUser?.displayName;
      imguser = dataUser?.photoURL;
      this.service_chat.buscarAmigos(userid).subscribe((data)=>{
        if(data.length == 0){
          this.service_chat.nuevoUsuario(userid,imguser,username);
        }
      })
    })
    
    this.service_publicaciones.cargarPublicaciones().subscribe((data)=>{
        this.publicaciones = data;
        
    })
  }
  ngOnInit(){
    this.comentarios_service.$modal.subscribe((data)=>{
      this.modal = data;
    })
  }
  onLike(uid:any,fecha:any){
    this.service_publicaciones.onLike(uid,fecha)
  }

  onComents(uid:any,fecha:any){
    // Activar modal
    let coment : comentario = {
      uid,
      fecha
    }
    this.comentarios_service.cargarData(coment);
    this.modal = true;
   
  }
  onShare(url_img:string){
    let user_img, nombre_user, uid, fecha;
    this.service_login.getUser().subscribe((data)=>{
      user_img = data?.photoURL;
      nombre_user = data?.displayName;
      uid = data?.uid;
      fecha = new Date();
        let publicacion = {
          comentarios:[],
          emisor:uid,
          fecha_publicacion:fecha,
          img:url_img,
          img_user: user_img,
          likes: 0,
          nombre_user: nombre_user,
          texto: ""
        }
        this.nueva_publicacion_service.nuevaPublicacion(publicacion);
        //location.reload();
      
    })
   // this.nueva_publicacion_service.nuevaPublicacion()
  }

}