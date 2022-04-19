import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  usuarioLogeado : any;
  nuevoMensaje: string = ""
  mensajes: any[] = []
  constructor(private service: LoginService,private componente: AppComponent) {
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
    let mensaje = { 
      emisor: this.usuarioLogeado.uid,
      texto: this.nuevoMensaje,
      fecha: new Date().getTime()
    }
    this.service.agregarMensaje(mensaje)
    this.nuevoMensaje = "";
  }
  send(){
    let mensaje = { 
      emisor: this.usuarioLogeado.uid,
      texto: this.nuevoMensaje,
      fecha: new Date().getTime()
    }
    this.service.agregarMensaje(mensaje)
    this.nuevoMensaje = "";
  }
  logout(){
    this.service.logout();
    this.componente.logeado = false;
  }
}
