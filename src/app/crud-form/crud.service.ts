import { Injectable } from '@angular/core';
import { CrudEntity } from './crud-entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CrudService {

  constructor(
    private http: HttpClient
  ) {}

  addEntity (entity: CrudEntity): Observable<CrudEntity> {
    return this.http.post<CrudEntity>('api/cruders', entity, httpOptions);
  }

  get() {
    return this.http.get<CrudEntity[]>("api/cruders");
  }

}
