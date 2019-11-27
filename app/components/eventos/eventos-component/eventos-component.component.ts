import { Component, OnInit, ViewChild } from '@angular/core';
import { MainserviceService } from 'src/app/service/mainservice.service';
import { Evento } from 'src/app/types/types.module';

@Component({
  selector: 'app-eventos-component',
  templateUrl: './eventos-component.component.html',
  styleUrls: ['./eventos-component.component.scss']
})
export class EventosComponentComponent implements OnInit {
  @ViewChild('dismissCambiosEditeventos', {static: false}) dismissCambiosEditeventos: any;
  @ViewChild('dismissCambiosAgregareventos', {static: false}) dismissCambiosAgregareventos: any;

  selectedEvento: Evento = 
  {actividad: "Nueva actividad", fecha: "2019-11-25", descripcion: "Nueva actividad :)",
  ubicacion: {provincia: " LIMON", canton: " MATINA", distrito: "Matina", direccion: null, gps: null},
  informacioncontacto: {nombre: "Michelle", correo: "lol@mich", telefono: "61638663"}};

  constructor(private mainservice: MainserviceService) { }

  ngOnInit() {
    
  }

  editar(evento: Evento) {
    this.clearTag("actividad-desc-editar");
    //this.clearTag("fecha-actividad-editar");
    this.clearTag("descripcion-actividad-editar");
    this.clearTag("nombre-contacto-actividad-editar");
    this.clearTag("correo-contacto-actividad-editar");
    this.clearTag("telefono-actividad-editar");
    this.selectedEvento = evento;
    this.mainservice.editarEvento = JSON.parse(JSON.stringify(evento));
  }

  agregarevento() {
    this.clearTag("actividad-desc-agregar");
    //this.clearTag("fecha-actividad-agregar");
    this.clearTag("descripcion-actividad-agregar");
    this.clearTag("nombre-contacto-actividad-agregar");
    this.clearTag("correo-contacto-actividad-agregar");
    this.clearTag("telefono-actividad-agregar");
    this.mainservice.agregarEvento = 
    {actividad: "", fecha: "", descripcion: "",
    ubicacion: {provincia: "", canton: "", distrito: "", direccion: "", gps: ""},
    informacioncontacto: {nombre: "", correo: "", telefono: ""}};
  }

  eliminar(evento: Evento) {
    this.mainservice.eventos = this.mainservice.eventos.filter(function(value, index, args) {
      return value != evento;
    });
    //Función para eliminar
  }

  guardarCambiosEdit(){
    if(!this.validateCamposEditar()) return;
    let index = this.mainservice.eventos.indexOf(this.selectedEvento);
    this.mainservice.eventos[index] = JSON.parse(JSON.stringify(this.mainservice.editarEvento));
    this.dismissCambiosEditeventos.nativeElement.click();
    // Write apollo call
  }

  guardarCambiosAgregar() {
    if(!this.validateCamposAgregar()) return;
    this.mainservice.eventos.push(JSON.parse(JSON.stringify(this.mainservice.agregarEvento)));
    this.dismissCambiosAgregareventos.nativeElement.click();
    // Función para agregar evento.
  }

  validateCamposAgregar(): Boolean {
    this.textChange("actividad-desc-agregar", "Ingrese la actividad");
      this.textChange("fecha-actividad-agregar", "Ingrese la fecha");
      this.textChange("descripcion-actividad-agregar", "Ingrese una descripción");
      this.textChange("nombre-contacto-actividad-agregar", "Ingrese el nombre de contacto");
      this.textChange("correo-contacto-actividad-agregar", "Ingrese el correo de contacto");
      this.textChange("telefono-actividad-agregar", "Ingrese el telefono de contacto");
    if (this.mainservice.agregarEvento.actividad == "" || this.mainservice.agregarEvento.descripcion == "" || 
    this.mainservice.agregarEvento.fecha == "" || this.mainservice.agregarEvento.informacioncontacto.nombre == "" ||
    this.mainservice.agregarEvento.informacioncontacto.correo == "" || this.mainservice.agregarEvento.informacioncontacto.telefono == "") {
      
      return false;
    } 
    return true;
  }

  validateCamposEditar(): Boolean {
    this.textChange("actividad-desc-editar", "Ingrese la actividad");
    this.textChange("fecha-actividad-editar", "Ingrese la fecha");
    this.textChange("descripcion-actividad-editar", "Ingrese una descripción");
    this.textChange("nombre-contacto-actividad-editar", "Ingrese el nombre de contacto");
    this.textChange("correo-contacto-actividad-editar", "Ingrese el correo de contacto");
    this.textChange("telefono-actividad-editar", "Ingrese el teléfono de contacto");
    if (this.mainservice.editarEvento.actividad == "" || this.mainservice.editarEvento.descripcion == "" || 
    this.mainservice.editarEvento.informacioncontacto.nombre == "" || 
    this.mainservice.editarEvento.informacioncontacto.correo == "" || this.mainservice.editarEvento.informacioncontacto.telefono == "") {
      console.log(this.mainservice.editarEvento);
      return false;
    } 
    return true;
  }

  clearTag(tagName) {
    var element = (document.getElementById(tagName) as HTMLInputElement);
    element.classList.remove("is-invalid");
    element.classList.remove("is-valid");
  }

  textChange(tagName: string, errorMessage: string) {
    var element = (document.getElementById(tagName) as HTMLInputElement);
    if (element.value.trim() == "" || (tagName == "correo-contacto-evento" && !element.value.trim().includes("@"))){
      element.className += " is-invalid";
      element.placeholder = errorMessage;
    } else {
      element.classList.remove("is-invalid");
      element.className += " is-valid";
    }
  }
}
