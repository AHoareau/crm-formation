import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './pages/observables/observables.component';
import { TestObservablesRoutingModule } from './test-observables-routing.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [ObservablesComponent],
  imports: [
    CommonModule,
    TestObservablesRoutingModule,
    TextModule
  ]
})
export class TestObservablesModule { }
