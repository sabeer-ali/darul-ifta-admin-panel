import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { NgSelectModule } from "@ng-select/ng-select";

import { MustafthiRoutingModule } from "./mustafthi-routing.module";
import { MustafthiListComponent } from "./mustafthi-list/mustafthi-list.component";
import { MustafthiViewComponent } from "./mustafthi-view/mustafthi-view.component";
import { MustafthiEditComponent } from "./mustafthi-edit/mustafthi-edit.component";
import { MustafthiCreateComponent } from './mustafthi-create/mustafthi-create.component';

@NgModule({
  declarations: [
    MustafthiListComponent,
    MustafthiViewComponent,
    MustafthiEditComponent,
    MustafthiCreateComponent,
  ],
  imports: [
    CommonModule,
    MustafthiRoutingModule,
    NgxPaginationModule,
    NgSelectModule,
  ],
})
export class MustafthiModule {}
