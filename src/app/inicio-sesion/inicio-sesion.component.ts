import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  items: Observable<any[]>;
  form = new FormGroup({
    correo: new FormControl(),
    pass: new FormControl(),
  });
  datos: any
  constructor( private firestore: AngularFirestore, private service_login: LoginService, private route: Router) { 
    this.items = this.firestore.collection('chats', ref => ref.orderBy("fecha","asc")).valueChanges();
  }

  ngOnInit(): void {
  }

  async onEmail(){
    
    try{
      const {correo , pass} = this.form.value;
      this.service_login.login(correo,pass).then(()=>{
        this.route.navigateByUrl('/home')
      }).catch((e)=>{
        console.log(e)
      });
    }catch(e){
      console.log(e);
    }
  }

  async onGoogle(){
    try{
      await this.service_login.loginGoogle()
      .then(()=>{
        this.route.navigateByUrl('/home')
      }).catch((e)=>{
        console.log(e)
      });
      
    }
    catch(e){
      console.log(e);
    }
  }
  logout(){
    this.service_login.logout();
    this.service_login.getUser().subscribe((data) => { 
      if(data == null){
        console.log("no esta logeado"); 
      }
    })
  }
}
