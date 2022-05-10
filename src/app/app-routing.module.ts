import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
const routes: Routes = [
  {path: "auth", component: InicioSesionComponent},
  {path:"home", component: PublicacionesComponent},
  {path: "inicio", component: InicioComponent},
  {path: "home/chat/:id", component: ChatComponent},
  {path: "chat", component: ChatComponent},
  {path: '**', redirectTo: 'auth'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

