import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, switchMap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { BuyOrderInterfaceWithId, BuyOrderInterface } from '../interfaces/buy-order.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyorderService {

  constructor(private httpClient: HttpClient) { }

  getBuyOrders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
    .get<BuyOrderInterfaceWithId[]>(environment.databaseUrl + '/buyorders', httpOptions)
    .pipe(
      map(res => {
        return res;
      }),
      catchError(err => {
        return of(`I caught: ${err}`);
      })
    );
  }

  getBuyOrder(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
      .get<BuyOrderInterfaceWithId[]>(environment.databaseUrl + '/buyorder/' + id, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(err => {
          return of(`I caught: ${err}`);
        })
      );
  }

  addBuyOrder(buyOrder: BuyOrderInterface) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
      .post<BuyOrderInterfaceWithId[]>(environment.databaseUrl + '/buyorder', buyOrder, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(err => {
          return of(`I caught: ${err}`);
        })
      );
  }

  updateBuyOrder(buyOrder: BuyOrderInterfaceWithId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
      .put<BuyOrderInterfaceWithId>(environment.databaseUrl + '/buyorder/' + buyOrder.id, buyOrder, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(err => {
          return of(`I caught: ${err}`);
        })
      );
  }


  deleteBuyOrder(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
      .delete<BuyOrderInterfaceWithId[]>(environment.databaseUrl + '/buyorder/' + id, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(err => {
          return of(`I caught: ${err}`);
        })
      );
  }

}
