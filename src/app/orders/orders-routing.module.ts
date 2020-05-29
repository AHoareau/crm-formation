import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';
import { DetailComponent } from './components/detail/detail.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent,
  data: {title: 'Orders', subtitle: 'All orders'},
  children: [
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: 'comment',
        component: CommentComponent
      }
    ]
  },
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
