import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgxPaginationModule } from "ngx-pagination";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { CategoriesEditComponent } from "./categories-edit/categories-edit.component";
import { CategoriesAddComponent } from "./categories-add/categories-add.component";

@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoriesEditComponent,
    CategoriesAddComponent,
  ],
  imports: [CommonModule, CategoriesRoutingModule, NgxPaginationModule],
})
export class CategoriesModule {}
