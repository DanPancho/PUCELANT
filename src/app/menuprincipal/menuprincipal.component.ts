import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {

  usuarioLogeado : any;

  constructor(private service: LoginService, private componente: AppComponent) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.logout();
    this.componente.logeado = false;
  }

}
