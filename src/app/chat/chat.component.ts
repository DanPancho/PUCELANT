import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat/chat.service';
import { LoginService } from '../services/login/login.service';
import { AmigosComponent } from '../amigos/amigos.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  usuarioLogeado : any;
  nuevoMensaje: string = ""
  mensajes: any[] = []
  url: any[];
  constructor(private service_chat: ChatService, private service_login:LoginService,private router: Router,private amigos: AmigosComponent) {
    this.url = this.router.url.split('/')
    this.service_chat.cargarMensajes(this.url[3]).subscribe((data)=>{
      this.mensajes = data
    })

    
    
   }
  ngOnInit(): void {
    
    this.service_login.getUser().subscribe((data) => { 
      this.usuarioLogeado = data
    })
  }
  
 
  enviarMensaje(){
    let mensaje = { 
      emisor: this.usuarioLogeado.uid,
      fecha: new Date().getTime(),
      id: this.url[3],
      receptor: this.amigos.receptor,
      texto: this.nuevoMensaje,
     
    }
    this.service_chat.agregarMensaje(mensaje)
    this.nuevoMensaje = "";
  }
  send(){
    let mensaje = { 
      emisor: this.usuarioLogeado.uid,
      fecha: new Date().getTime(),
      id: this.url[3],
      receptor: this.amigos.receptor,
      texto: this.nuevoMensaje,
    }
    this.service_chat.agregarMensaje(mensaje)
    this.nuevoMensaje = "";
  }
}

