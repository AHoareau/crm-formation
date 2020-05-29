import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent,
  data: {title: 'Orders', subtitle: 'All orders'} },
  { path: 'add',
    component: PageAddOrderComponent,
    data: {title: 'Orders', subtitle: 'Add an order'}
  },
  { path: 'edit/:id',
    component: PageEditOrderComponent,
    data: {title: 'Orders', subtitle: 'Edit an order'}
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule { }
