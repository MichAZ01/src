import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { PaginaUsuarioComponent } from './paginas/pagina-usuario/pagina-usuario.component';


const routes: Routes = [
  {path:'principal', component: PaginaPrincipalComponent},
  {path:'', component: PaginaUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
