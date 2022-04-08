import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  show: boolean;
  items: Observable<any[]>;
  form = new FormGroup({
    correo: new FormControl(),
    pass: new FormControl(),
  });

  constructor( private firestore: AngularFirestore, private service: LoginService, private route: Router) { 
    this.items = this.firestore.collection('Publicaciones').valueChanges();
    this.items.subscribe((data)=>{
      //console.log(data);
    });
    this.show = true;
    this.service.getUser().subscribe((data) => { 
      if(data != null){
        this.show = false;
      }
    })
  }

  ngOnInit(): void {
  }

  async onEmail(){
    
    try{
      const {correo , pass} = this.form.value;
      this.service.login(correo,pass);
    }catch(e){
      console.log(e);
    }
  }

  async onGoogle(){
    try{
      await this.service.loginGoogle();
      this.show = false;
      this.route.navigate(["/chat"])
    }
    catch(e){
      console.log(e);
    }
  }
  logout(){
    this.service.logout();
    this.service.getUser().subscribe((data) => { 
      if(data == null){
        console.log("no esta logeado"); 
      }
    })
  }
}
