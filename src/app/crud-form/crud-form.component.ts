import { Component, OnInit } from '@angular/core';
import { CrudEntity } from './crud-entity';
import { CrudService } from './crud.service';
import 'rxjs/add/operator/catch';
import { ActivatedRoute } from "@angular/router";

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
    private crudService: CrudService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.getCrud();
  }

  save(): void {
    this.crudService.addEntity(this.crud).catch(err => {
         this.errorMessage = err.message;
         throw err;
    }).subscribe(
      () => this.successMessage = 'CRUD Save Success'
    );
  }


  getCrud(): void {
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      this.crudService.get().subscribe(
        items => this.crud = items[0]
      );
    } else {
      this.crud = new CrudEntity();
    }
  }


}
