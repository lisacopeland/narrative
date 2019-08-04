import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, switchMap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { BuyOrderInterfaceWithId, BuyOrderInterface } from '../interfaces/buy-order.interface';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Injectable({
  providedIn: 'root'
})
export class BuyorderService {

  private buyOrders: BuyOrderInterfaceWithId[];
  private buyOrderSource = new BehaviorSubject<BuyOrderInterfaceWithId[]>([]);
  buyOrdersChanged = this.buyOrderSource.asObservable();
  constructor(private httpClient: HttpClient) { }

  getBuyOrders(): Observable<BuyOrderInterfaceWithId[] | string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
    .get<BuyOrderInterfaceWithId[]>(environment.databaseUrl + '/buyorders', httpOptions)
    .pipe(
      map(res => {
        this.buyOrders = res;
        this.buyOrderSource.next(this.buyOrders.slice());
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

    interface ResponseResult {
      message: string;
      id: string;
    }

    return this.httpClient
      .post<ResponseResult>(environment.databaseUrl + '/buyorder', buyOrder, httpOptions)
      .pipe(
        map(res => {
          const id = res.id;
          const newBuyOrder = { id, ...buyOrder } as BuyOrderInterfaceWithId;
          this.buyOrders.push(newBuyOrder);
          this.buyOrderSource.next(this.buyOrders.slice());
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
          const idx = this.buyOrders.findIndex(x => x.id === buyOrder.id);
          this.buyOrders[idx] = buyOrder;
          this.buyOrderSource.next(this.buyOrders.slice());
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
          const idx = this.buyOrders.findIndex(x => x.id === id);
          this.buyOrders.slice(idx, 1);
          this.buyOrderSource.next(this.buyOrders.slice());
          return res;
        }),
        catchError(err => {
          return of(`I caught: ${err}`);
        })
      );
  }

}
