import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { environment } from '../environments/environment';
import { LoginService } from './services/login/login.service';
import { ChatService } from './services/chat/chat.service';
import { FormsModule } from '@angular/forms';
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ChatComponent } from './chat/chat.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { AmigosComponent } from './amigos/amigos.component';
import { PublicacionesService } from './services/publicaciones/publicaciones.service';
import { NuevaPublicacionComponent } from './nueva-publicacion/nueva-publicacion.component';
import { NuevaPublicacionService } from './services/nuevaPublicacion/nueva-publicacion.service';
import { BuscarUsuarioService } from './services/buscarUsuario/buscar-usuario.service';
import { NewFriendService } from './services/newFriend/new-friend.service';
@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    ChatComponent,
    PublicacionesComponent,
    InicioComponent,
    MenuprincipalComponent,
    AmigosComponent,
    NuevaPublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [LoginService,ChatService,PublicacionesService,NuevaPublicacionService,BuscarUsuarioService,NewFriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
