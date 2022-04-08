import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  usuarioLogeado : any;
  nuevoMensaje: string = ""
  mensajes: any[] = []
  constructor(private service: LoginService) {
    this.service.cargarMensajes().subscribe((data) => { 
      this.mensajes = data
    })
   }

  ngOnInit(): void {
    this.service.getUser().subscribe((data) => { 
      this.usuarioLogeado = data
    })
  }
  enviarMensaje(){
    console.log(this.nuevoMensaje)
    let mensaje = { 
      emisor: this.usuarioLogeado.uid,
      texto: this.nuevoMensaje
    }
    this.service.agregarMensaje(mensaje)
    this.nuevoMensaje = "";
  }
  send(){
    console.log(this.nuevoMensaje)
    let mensaje = { 
      emisor: this.usuarioLogeado.uid,
      texto: this.nuevoMensaje
    }
    this.service.agregarMensaje(mensaje)
    this.nuevoMensaje = "";
  }
}
