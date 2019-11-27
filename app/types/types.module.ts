import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TypesModule { }

export type Evento = {
  actividad: string,
  fecha: String
  descripcion: String,
  ubicacion: Ubicacion,
  informacioncontacto: InformacionContacto
};

export type Ubicacion = {
  gps: String,
  provincia: String,
  canton: String,
  distrito: String,
  direccion: String
};

export type InformacionContacto = {
  nombre: String,
  correo: String,
  telefono: String
};

export type Provincia = {
  provinciacod: String,
  provincia: String,
  cantones: Canton[]
}

export type Canton = {
  provinciacod: String,
  cantoncod: String,
  canton: String,
  distritos: Distrito[]
}

export type Distrito = {
  distritocod: String,
  distrito: String
}
