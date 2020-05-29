import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public title: string;
  public subtitle: string;

  public item$: Observable<Order>;
  constructor(private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((datas) => {
    this.title = datas.title;
    this.subtitle = datas.subtitle;
    });

    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
          this.os.getItemById(params.get('id')))
    );
  }

  public edit(item: Order) {
    this.os.updateItem(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });
  }
}
