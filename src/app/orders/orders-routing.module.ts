import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent,
  data: {title: 'Orders', subtitle: 'All orders'} },
  { path: 'add',
    component: PageAddOrderComponent,
    data: {title: 'Orders', subtitle: 'Add an order'}
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule { }
