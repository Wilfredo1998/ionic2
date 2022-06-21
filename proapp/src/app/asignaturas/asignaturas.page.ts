/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {



  constructor(private crud: CrudService) {this.crud.databaseConn(); }

  ionViewDidEnter() {
    this.crud.getAllUsers2()
    }

  ngOnInit() {
  }

}
