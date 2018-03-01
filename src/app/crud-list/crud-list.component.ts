import { Component, OnInit } from '@angular/core';
import { CrudService } from "../crud-form/crud.service";
import { CrudEntity } from "../crud-form/crud-entity";
import { Router } from "@angular/router";

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

  cruders: CrudEntity[];

  constructor(private crudService: CrudService,
              private router: Router) { }

  ngOnInit() {
    this.crudService.get().subscribe(cruders => this.cruders = cruders);
  }

  gotoCrudForm(crud: CrudEntity) {
    this.router.navigate(['crud', {email: crud.email}]);
  }
}
