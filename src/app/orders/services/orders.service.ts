import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`);
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

  // update item

  // add item in collection

  // delete item in collection

  // get item by id from collection
}
