import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
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

  constructor( private firestore: AngularFirestore, private service: LoginService) { 
    this.items = this.firestore.collection('Publicaciones').valueChanges();
    this.items.subscribe((data)=>{
      console.log(data);
    });
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
    }
    catch(e){
      console.log(e);
    }
  }

}
