import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderInvitadoComponent } from './components/header-invitado/header-invitado.component';
import { PaginaPrincipalComponent } from './components/paginas/pagina-principal/pagina-principal.component';
import { FooterGeneralComponent } from './components/footer-general/footer-general.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderInvitadoComponent,
    PaginaPrincipalComponent,
    FooterGeneralComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
