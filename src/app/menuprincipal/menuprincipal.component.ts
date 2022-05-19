import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {

  form = new FormGroup({
    buscado: new FormControl()
  })
  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.service.logout();
  }
  onSubmit(){

  }
}
