import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

import { FatwasRoutingModule } from "./fatwas-routing.module";
import { FatwasListComponent } from "./fatwas-list/fatwas-list.component";
import { FatwasViewComponent } from "./fatwas-view/fatwas-view.component";

@NgModule({
  declarations: [FatwasListComponent, FatwasViewComponent],
  imports: [CommonModule, FatwasRoutingModule, NgxPaginationModule],
})
export class FatwasModule {}
