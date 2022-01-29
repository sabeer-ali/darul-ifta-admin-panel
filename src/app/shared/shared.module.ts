import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDataAvailableComponent } from './no-data-available/no-data-available.component';



@NgModule({
  declarations: [NoDataAvailableComponent],
  imports: [
    CommonModule
  ],
  exports: [NoDataAvailableComponent]
})
export class SharedModule { }
