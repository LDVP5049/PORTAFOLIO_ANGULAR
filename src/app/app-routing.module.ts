import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';


import { ProductComponent } from './components/product/product.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'productos', component: ProductComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: '**', redirectTo: 'principal', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
