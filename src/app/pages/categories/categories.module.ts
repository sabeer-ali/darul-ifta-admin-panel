import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxPaginationModule } from "ngx-pagination";
import { NgSelectModule } from "@ng-select/ng-select";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { CategoriesEditComponent } from "./categories-edit/categories-edit.component";
import { CategoriesAddComponent } from "./categories-add/categories-add.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoriesEditComponent,
    CategoriesAddComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CategoriesModule {}
