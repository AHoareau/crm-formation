import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageListClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
