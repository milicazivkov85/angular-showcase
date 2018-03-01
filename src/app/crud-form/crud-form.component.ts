import { Component, OnInit } from '@angular/core';
import { CrudEntity } from './crud-entity';
import { CrudService } from './crud.service';
import 'rxjs/add/operator/catch';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  crud: CrudEntity;
  errorMessage: string;
  successMessage: string;

  constructor(
    private crudService: CrudService) {}

  ngOnInit() {
    this.crud = new CrudEntity();
  }

  save(): void {
    this.crudService.addEntity(this.crud).catch(err => {
         this.errorMessage = err.message;
         throw err;
    }).subscribe(
      () => this.successMessage = 'CRUD Save Success'
    );
  }

}
