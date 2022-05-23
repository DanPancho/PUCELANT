import { Component, OnInit } from '@angular/core';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { PublicacionesService } from '../services/publicaciones/publicaciones.service';
import { ChatService } from '../services/chat/chat.service';
import { LoginService } from '../services/login/login.service';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  publicaciones: any[] = [];

  constructor(private service_publicaciones:PublicacionesService, private service_chat: ChatService, private service_login: LoginService){
    // Verificar si es un nuevo usuario -> Buscar el id en la tabla de amigos 
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
  }


}