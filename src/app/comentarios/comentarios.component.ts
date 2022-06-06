import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { comentario } from '../interfaces/comentario';
import { ComentariosService } from '../services/comentarios/comentarios.service';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  form = new FormGroup({
    descripcion: new FormControl()
  })
  data:comentario
  me:any;
  constructor(private comentarios_service: ComentariosService, private login_service: LoginService, private router: Router) {

    this.data = comentarios_service.obtenerData();
    this.login_service.getUser().subscribe((data)=>{
      this.me = data?.photoURL
    })
   }

  ngOnInit(): void {
  }
  closeModal(){
    this.comentarios_service.$modal.emit(false);
  }

  onSubmit(){
    const {descripcion} = this.form.value
    // Mandar a guardar 
    this.comentarios_service.onComent(this.data,descripcion)
    this.closeModal();

  }
}
