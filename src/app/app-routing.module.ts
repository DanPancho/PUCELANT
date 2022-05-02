import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
const routes: Routes = [
  {path: "*", component: InicioSesionComponent},
  {path:"home", component: PublicacionesComponent},
  {path:"inicio", component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Rutas = [InicioSesionComponent, PublicacionesComponent, InicioComponent]
