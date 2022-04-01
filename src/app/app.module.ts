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
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import {AngularFireDatabaseModule} from 'angularfire2/database'
//import {AngularFireModule} from 'angularfire2';
//import {AngularFireStorageModule} from 'angularfire2/storage';
//import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    //AngularFireDatabaseModule
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireStorageModule,
   // AngularFireAuth,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
