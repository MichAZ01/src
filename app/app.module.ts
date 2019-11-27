import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderInvitadoComponent } from './components/header-invitado/header-invitado.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { FooterGeneralComponent } from './components/footer-general/footer-general.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { HeaderUsuarioComponent } from './components/header-usuario/header-usuario.component';
import { PaginaUsuarioComponent } from './paginas/pagina-usuario/pagina-usuario.component';
import { InformacionUsuarioComponent } from './components/informacion-usuario/informacion-usuario.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderInvitadoComponent,
    PaginaPrincipalComponent,
    FooterGeneralComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    RegistrarseComponent,
    HeaderUsuarioComponent,
    PaginaUsuarioComponent,
    InformacionUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
