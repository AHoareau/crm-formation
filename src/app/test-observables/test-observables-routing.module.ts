import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './pages/observables/observables.component';
const routes: Routes = [
  { path: 'test-observables', component: ObservablesComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestObservablesRoutingModule { }
