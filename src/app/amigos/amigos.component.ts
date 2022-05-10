import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat/chat.service';
import { LoginService } from '../services/login/login.service';
import { ChatComponent } from '../chat/chat.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {
  private user: any;
  Amigos: any;
  receptor: string;
   constructor(private service_chat: ChatService, private service_login: LoginService,private router: Router) { 
      this.service_login.getUser().subscribe((data) => {
        this.user = data?.uid;
        this.buscarAmigos();
      })
      this.receptor = ""
    }


  ngOnInit(): void {
  }

  buscarAmigos(){
    this.service_chat.buscarAmigos(this.user).subscribe((data)=>{
      this.Amigos = data      
    })
  }
  mensajes(indice:any){
    this.receptor = this.Amigos[0].amigos[indice].id_ami
    this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
    this.router.navigate([`/home/chat/${this.Amigos[0].amigos[indice].id_chat}`]))

  }
}
