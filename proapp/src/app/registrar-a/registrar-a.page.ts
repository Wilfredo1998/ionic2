/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-registrar-a',
  templateUrl: './registrar-a.page.html',
  styleUrls: ['./registrar-a.page.scss'],
})
export class RegistrarAPage implements OnInit {

  iAsignatura= "";
  // eslint-disable-next-line @typescript-eslint/quotes
  iHorario: string = "";

  constructor(private crud: CrudService) {this.crud.databaseConn(); }
  createUser(){
    this.crud.addItem2(this.iAsignatura, this.iHorario);
    }


  ngOnInit() {
  }

}
