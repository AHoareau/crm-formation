import { OrderI } from '../interfaces/order-i';
import { StateOrder } from '../enums/state-order.enum';

export class Order implements OrderI{
  tjmHt = 500;
  nbJours = 1;
  tva : 20;
  state: StateOrder.OPTION;
  typePresta: string;
  client: string;
  comment: string;
  id: number;

  constructor(obj?: Partial<Order>) {
    if(obj) {
      Object.assign(this, obj);
    }
  }

  totalHt(): number {
    return this.tjmHt*this.nbJours;
  }
  totalTtc(): number {
    return this.totalHt() * (1 + (this.tva / 100));
  }
}
