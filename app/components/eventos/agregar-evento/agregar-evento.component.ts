import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/service/mainservice.service';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.scss']
})
export class AgregarEventoComponent implements OnInit {

  constructor(private mainservice: MainserviceService) { }

  ngOnInit() {
  }

}
