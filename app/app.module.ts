import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderInvitadoComponent } from './components/header-invitado/header-invitado.component';
import { PaginaPrincipalComponent } from './/paginas/pagina-principal/pagina-principal.component';
import { FooterGeneralComponent } from './components/footer-general/footer-general.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { EventosComponentComponent } from './components/eventos/eventos-component/eventos-component.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MainserviceService } from './service/mainservice.service';
import { EditarEventoComponent } from './components/eventos/editar-evento/editar-evento.component';
import { AgregarEventoComponent } from './components/eventos/agregar-evento/agregar-evento.component';

export function mainServiceProvider(provider: MainserviceService) {
  return () => provider.init();
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderInvitadoComponent,
    PaginaPrincipalComponent,
    FooterGeneralComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    RegistrarseComponent,
    EventosComponentComponent,
    EditarEventoComponent,
    AgregarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MainserviceService,{ provide: APP_INITIALIZER, useFactory: mainServiceProvider, deps: [MainserviceService], multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
