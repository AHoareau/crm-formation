import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { NavLink } from 'src/app/shared/interfaces/nav-link';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  // public collection: Order[];
  public title: string;
  public subtitle: string;
  public collection$: Subject<Order[]> = new Subject();
  public headers: string[];
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public states = Object.values(StateOrder);
  // private sub: Subscription;

  public itemsLinks: NavLink[];

  constructor(
    private os: OrdersService,
    private router: Router,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemsLinks = [
      { route: 'detail', label: 'Détail'},
      { route: 'comment', label: 'Comment'}
    ]

    this.btnRoute = {
      label: 'Add an order',
      route: 'add'
    };
    this.btnHref = {
      label: 'Go to Google',
      href: 'http://www.google.fr'
    };
    this.btnAction = {
      label: 'Open dialogue',
      action: true
    };

    this.os.collection.subscribe((col) => {
      console.log(col);
      this.collection$.next(col);
    });

    // this.sub = this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    // });
    this.headers = [
      'Type',
      'Client',
      'Nb. Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
      'Actions'
    ];
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      // traiter la res de l'api, codes erreur etc...
      item.state = res.state;
    });
  }

  public openPopUp() {
    console.log('open popup');
  }

  public delete(item) {
    this.os.delete(item).subscribe((res) => {
        this.os.collection.subscribe((col) => {
          console.log(col);
          this.collection$.next(col);
        });
    });
  }

  public edit(item: Order){
    this.router.navigate(['edit',item.id],{relativeTo: this.route});
  }

  public getItem(item: Order) {
      this.os.detailItem$.next(item);
  }

}
