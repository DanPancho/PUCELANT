import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
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

//import {AngularFireDatabaseModule} from 'angularfire2/database'
//import {AngularFireModule} from 'angularfire2';
//import {AngularFireStorageModule} from 'angularfire2/storage';
//import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    ChatComponent,
    PublicacionesComponent,
    InicioComponent,
    MenuprincipalComponent,
    AmigosComponent
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
  providers: [LoginService,ChatService,AmigosComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
