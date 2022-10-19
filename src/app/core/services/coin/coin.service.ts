import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Coin, Datum } from 'src/app/core/models/coin';

import { coinEndpoints } from 'src/app/global/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private readonly urlBase: string = environment.urlBase;

  constructor(private http: HttpClient) {}

  getMonedas(): Observable<Datum[]> {
    return this.http.get<Coin>(coinEndpoints.getCoins).pipe(
      map((item) => {
        return item.response.data;
      })
    );
  }

}
