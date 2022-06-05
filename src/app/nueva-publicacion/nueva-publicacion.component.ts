import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { NuevaPublicacionService } from '../services/nuevaPublicacion/nueva-publicacion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nueva-publicacion',
  templateUrl: './nueva-publicacion.component.html',
  styleUrls: ['./nueva-publicacion.component.css']
})
export class NuevaPublicacionComponent implements OnInit {


  form = new FormGroup({
    url_img: new FormControl(),
    descripcion: new FormControl()
  })

  constructor(private modal_service: NuevaPublicacionService, private login_services: LoginService, private router:Router ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modal_service.$modal.emit(false);
  }

  onShare(){
    const{url_img, descripcion} = this.form.value;
    let user_img, nombre_user, uid, fecha;
    this.login_services.getUser().subscribe((data)=>{
      user_img = data?.photoURL;
      nombre_user = data?.displayName;
      uid = data?.uid;
      fecha = new Date();
      if(url_img != ""){
        let publicacion = {
          comentarios:[],
          emisor:uid,
          fecha_publicacion:fecha,
          img:url_img,
          img_user: user_img,
          likes: 0,
          nombre_user: nombre_user,
          texto: descripcion
        }
        this.modal_service.nuevaPublicacion(publicacion);
        this.closeModal();
        //location.reload();
      }
      else{
        alert("DEBE INSERTAR LA URL DE LA IMAGEN PARA PODER PUBLICAR ")
      }
    })
   
   
  }

}
