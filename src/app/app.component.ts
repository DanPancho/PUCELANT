import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pucelant';
  logeado: boolean;
  constructor(private service: LoginService, private router: Router){
    this.logeado = false;
    this.service.getUser().subscribe((data)=>{
      if(data != null){
        this.router.navigate(["home"])
        this.logeado = true;
      }
      
    })
  }

}
