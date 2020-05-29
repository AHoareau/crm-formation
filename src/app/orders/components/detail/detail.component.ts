import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public items$: Subject<Order>;
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.items$ = this.os.detailItem$;
  }

}
