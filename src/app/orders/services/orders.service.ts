import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj);
        })
      })
    );
  }

  // get_collection
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  // set_collection
  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

  // change item state in collection
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  // update item
  public updateItem(item: Order): Observable<Order>{
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  // add item in collection

  // delete item in collection

  // get item by id from collection
}
