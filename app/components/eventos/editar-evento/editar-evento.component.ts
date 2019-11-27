import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/service/mainservice.service';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {

  constructor(private mainservice: MainserviceService, private apollo: Apollo) { }

  ngOnInit() {
  }

}
