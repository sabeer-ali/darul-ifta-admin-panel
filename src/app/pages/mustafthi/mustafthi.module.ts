import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

import { MustafthiRoutingModule } from "./mustafthi-routing.module";
import { MustafthiListComponent } from "./mustafthi-list/mustafthi-list.component";
import { MustafthiViewComponent } from './mustafthi-view/mustafthi-view.component';
import { MustafthiEditComponent } from './mustafthi-edit/mustafthi-edit.component';

@NgModule({
  declarations: [MustafthiListComponent, MustafthiViewComponent, MustafthiEditComponent],
  imports: [CommonModule, MustafthiRoutingModule, NgxPaginationModule],
})
export class MustafthiModule {}
