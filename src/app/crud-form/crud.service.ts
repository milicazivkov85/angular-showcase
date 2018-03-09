import { Injectable } from '@angular/core';
import { CrudEntity } from './crud-entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const restApiUrl = 'https://vrise4bmgk.execute-api.eu-central-1.amazonaws.com/dev/crud';

@Injectable()
export class CrudService {

  constructor(
    private http: HttpClient
  ) {}

  addEntity (entity: CrudEntity): Observable<CrudEntity> {
    return this.http.post<CrudEntity>(restApiUrl, entity, httpOptions);
  }

  get() {
    return this.http.get<CrudEntity[]>(restApiUrl);
  }

}
