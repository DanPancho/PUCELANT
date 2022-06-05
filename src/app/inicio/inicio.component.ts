import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../services/publicaciones/publicaciones.service';
import { Router } from '@angular/router';
import { BuscarUsuarioService } from '../services/buscarUsuario/buscar-usuario.service';
import { LoginService } from '../services/login/login.service';
import { NewFriendService } from '../services/newFriend/new-friend.service';
import { ChatService } from '../services/chat/chat.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  notme: boolean;
  user: any;
  user_name:any;
  user_img:any;
  uid: any;
  publicaciones: any[] = [];
  url: any[];
  me : any;
  me_img: any;
  me_nombre: any;
  User1_amigos: any[] = [];
  User2_amigos: any[] = [];
  cont: any = 0;
  cont2: any = 0;
  friends: any;
  constructor(private buscarUsuario_service: BuscarUsuarioService, private publicaciones_service: PublicacionesService,private router: Router, private login_service: LoginService, private newFriend_service: NewFriendService, private chat_service: ChatService) {
    this.notme = false;
    this.url = this.router.url.split('/');
    this.buscarUsuario_service.buscarUsuario(this.url[3]).subscribe((data)=>{
      
      this.user = data.map((dato)=>{
        return dato;
      });
      this.user_name = this.user[0].nombre;
      this.user_img = this.user[0].img;
      this.uid = this.user[0].id
      
      
    })
    this.publicaciones_service.enviarPublicacionesByID(this.url[3]).subscribe((data)=>{
      this.publicaciones = data;
    })
   }
  ngOnInit(): void {
    this.login_service.getUser().subscribe((data)=>{
      this.notme = false;
      this.me = data?.uid;
      this.me_img = data?.photoURL;
      this.me_nombre = data?.displayName;
      if(data?.uid == this.url[3]){
        this.chat_service.buscarAmigos(this.me).subscribe((data)=>{
          let friends_me:any[] = data
          this.friends = friends_me[0].amigos.length;
        })
      }else{
        this.notme = true;
      }
      
      
    })
  }
  borrarBtn(){
    //this.notme = false;
  }

  newFriend(){
    // 1. Obtener toda la informacion al amigo buscado -> Listo
    // 2. Crear su id Chat 
    let amigo1  = { 
      "id_ami": this.uid,
      "id_chat": this.me + this.uid,
      "img_ami": this.user_img,
      "nombre_ami": this.user_name
    }

    let amigo2 = { 
      "id_ami": this.me,
      "id_chat": this.me + this.uid,
      "img_ami": this.me_img,
      "nombre_ami": this.me_nombre
    }
    
    // 3 Obtener todos los amigos y pushear
    let subscripcion1 = this.chat_service.buscarAmigos(this.me).subscribe((data)=>{
      let aux : any[]= data
      this.User1_amigos = aux[0].amigos;
      this.User1_amigos.push(amigo1);
      this.newFriend_service.newFriend(this.me,this.User1_amigos);
      subscripcion1.unsubscribe();
    });
    let subscripcion2 = this.chat_service.buscarAmigos(this.url[3]).subscribe((data)=> {
      let aux : any[]= data
      this.User2_amigos = aux[0].amigos;
      this.User2_amigos.push(amigo2);
      this.newFriend_service.newFriend(this.url[3], this.User2_amigos);
      subscripcion2.unsubscribe();
    });

    // 4. Crear el chat 
    let mensaje = { 
      "emisor": "Creacion Chat",
      "fecha": new Date().getTime(),
      "id": this.me + this.uid,
      "texto":""
    }
    this.chat_service.agregarMensaje(mensaje);
    
  }
}
