import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";

import { MustafthiRoutingModule } from "./mustafthi-routing.module";
import { MustafthiListComponent } from "./mustafthi-list/mustafthi-list.component";
import { MustafthiViewComponent } from "./mustafthi-view/mustafthi-view.component";
import { MustafthiEditComponent } from "./mustafthi-edit/mustafthi-edit.component";
import { MustafthiCreateComponent } from "./mustafthi-create/mustafthi-create.component";
import { UsersModule } from "../users/users.module";
import { SharedModule } from "app/shared/shared.module";

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
    UsersModule,
    FormsModule,
    SharedModule,
  ],
})
export class MustafthiModule {}
