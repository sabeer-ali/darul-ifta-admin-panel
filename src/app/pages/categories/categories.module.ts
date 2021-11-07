import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';



@NgModule({
  declarations: [CategoriesListComponent, CategoriesEditComponent, CategoriesViewComponent],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
