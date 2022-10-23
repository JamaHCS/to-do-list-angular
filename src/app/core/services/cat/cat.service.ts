import { endpoints } from './../../../global/endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CatFact } from '../../models/cat/fact.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getFact(): Observable<CatFact> {
    return this.http
      .get<CatFact>(endpoints.catFactApi)
      .pipe(
        map((resp) => {
          return {
            fact: resp.fact,
            length: resp.length
          }
        })
      );
  }
}
