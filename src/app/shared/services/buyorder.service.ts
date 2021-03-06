import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { BuyOrderInterfaceWithId, BuyOrderInterface } from '../interfaces/buy-order.interface';
import { of, Observable, BehaviorSubject } from 'rxjs';

// Service for persisting and getting data from the database
// Service maintains a private store and alerts consumers to
// changes with an observable
@Injectable({
  providedIn: 'root'
})
export class BuyorderService {

  private buyOrders: BuyOrderInterfaceWithId[];
  private buyOrderSource = new BehaviorSubject<BuyOrderInterfaceWithId[]>([]);
  buyOrdersChanged = this.buyOrderSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  intialize() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
      .get(environment.databaseUrl + '/initialize', httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(err => {
          return of(`I caught: ${err}`);
        })
      );

  }

  sendCurrentData() {
    this.buyOrderSource.next(this.buyOrders.slice());
  }

  // GET Call to get all data
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
        console.log('buyorders from get : ' + JSON.stringify(this.buyOrders));
        this.buyOrderSource.next(this.buyOrders.slice());
        return res;
      }),
      catchError(err => {
        return of(`I caught: ${err}`);
      })
    );
  }

  // Get a single record by id
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

  // Perform a 'POST' request with a record
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

  // Update an existing record with a 'PUT'
  updateBuyOrder(buyOrder: BuyOrderInterfaceWithId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
      .put(environment.databaseUrl + '/buyorder/' + buyOrder.id, buyOrder, httpOptions)
      .pipe(
        map(() => {
          const idx = this.buyOrders.findIndex(x => x.id === buyOrder.id);
          this.buyOrders[idx] = buyOrder;
          this.buyOrderSource.next(this.buyOrders.slice());
          return 'success';
        }),
        catchError(err => {
          return of(`I caught: ${err}`);
        })
      );
  }

  // Delete single record by id
  deleteBuyOrder(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log('going to delete id: ' + id);
    return this.httpClient
      .delete(environment.databaseUrl + '/buyorder/' + id, httpOptions)
      .pipe(
        map(() => {
          const idx = this.buyOrders.findIndex(x => x.id === id);
          this.buyOrders.splice(idx, 1);
          this.buyOrderSource.next(this.buyOrders.slice());
          return 'success';
        }),
        catchError(err => {
          return of(`I caught: ${err}`);
        })
      );
  }

}
