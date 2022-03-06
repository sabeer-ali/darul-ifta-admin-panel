import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularEditorModule } from "@kolkov/angular-editor";

import { FatwasRoutingModule } from "./fatwas-routing.module";
import { FatwasListComponent } from "./fatwas-list/fatwas-list.component";
import { FatwasViewComponent } from "./fatwas-view/fatwas-view.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [FatwasListComponent, FatwasViewComponent],
  imports: [
    CommonModule,
    FatwasRoutingModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    AngularEditorModule,
  ],
})
export class FatwasModule {}
