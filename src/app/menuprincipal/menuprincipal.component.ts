import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { BuscarUsuarioService } from '../services/buscarUsuario/buscar-usuario.service';
import { NuevaPublicacionService } from '../services/nuevaPublicacion/nueva-publicacion.service';


@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {

  modalSwitch: boolean;
  form = new FormGroup({
    buscado: new FormControl()
  })
  constructor(private service: LoginService, private modal_service: NuevaPublicacionService, private router: Router) {
    this.modalSwitch = false;
   }

  ngOnInit(): void {
    this.modal_service.$modal.subscribe((data)=>{
      this.modalSwitch = data;
    })
  }
  
  logout(){
    this.service.logout();
  }
  onSubmit(){
    const {buscado} = this.form.value;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
      this.router.navigate([`home/user/${buscado}`])
    })
    
   
  }
  openModal(){
    this.modalSwitch = true;
  }

  perfil(){
    this.service.getUser().subscribe((data)=>{
      this.router.navigateByUrl(`home/user/${data?.uid}`)
    })
    
  }
}
