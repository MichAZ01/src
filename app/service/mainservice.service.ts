import { Injectable } from '@angular/core';
import { Evento, Ubicacion, Canton, Distrito } from '../types/types.module';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  provincias: {provinciacod: string, provincia: string}[] = [];
  cantones: {provinciacod: string, provincia: string, cantoncod: string, canton: string}[]= [];
  
  cantonesFiltrados: Canton[];
  distritosFiltrados: Distrito[];

  
  eventos: Evento[] = [];
  
  editarEvento: Evento = 
  {actividad: "Nueva actividad", fecha: "2019-11-25", descripcion: "Nueva actividad :)",
    ubicacion: {provincia: " LIMON", canton: " MATINA", distrito: "Matina", direccion: null, gps: null},
    informacioncontacto: {nombre: "Michelle", correo: "lol@mich", telefono: "61638663"}};
  
  agregarEvento: Evento = 
  {actividad: "Nueva actividad", fecha: "2019-11-25", descripcion: "Nueva actividad :)",
    ubicacion: {provincia: " LIMON", canton: " MATINA", distrito: "Matina", direccion: null, gps: null},
    informacioncontacto: {nombre: "Michelle", correo: "lol@mich", telefono: "61638663"}};
  
  constructor() {
    this.eventos.push({actividad: "Nueva actividad", fecha: "2019-11-25", descripcion: "Nueva actividad :)",
    ubicacion: {provincia: " LIMON", canton: " MATINA", distrito: "Matina", direccion: null, gps: null},
    informacioncontacto: {nombre: "Michelle", correo: "lol@mich", telefono: "61638663"}});
    this.eventos.push({actividad: "Nueva actividad2", fecha: "2019-11-25", descripcion: "Nueva actividad :)",
    ubicacion: {provincia: " LIMON", canton: " MATINA", distrito: "Matina", direccion: null, gps: null},
    informacioncontacto: {nombre: "Michelle", correo: "lol@mich", telefono: "61638663"}});
  }

  init(){
    
  }
}
