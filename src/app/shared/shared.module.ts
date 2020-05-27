import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';



@NgModule({
  declarations: [TableLightComponent, BtnComponent],
  imports: [
    CommonModule
  ],
  exports: [TableLightComponent, BtnComponent]
})
export class SharedModule { }
