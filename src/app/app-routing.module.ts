import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
const routes: Routes = [
  {path: "*", component: InicioSesionComponent},
  {path: "home", component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Rutas = [InicioSesionComponent, ChatComponent]
