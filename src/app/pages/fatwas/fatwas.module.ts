import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FatwasListComponent } from './fatwas-list/fatwas-list.component';
import { FatwasViewComponent } from './fatwas-view/fatwas-view.component';



@NgModule({
  declarations: [FatwasListComponent, FatwasViewComponent],
  imports: [
    CommonModule
  ]
})
export class FatwasModule { }
