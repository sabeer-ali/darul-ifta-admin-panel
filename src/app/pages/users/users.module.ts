import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UsersRoutingModule } from "./users-routing.module";
import { UserListComponent } from "./user-list/user-list.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserViewComponent } from "./user-view/user-view.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserAddComponent,
    UserViewComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxPaginationModule,
    NgSelectModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [UserAddComponent],
})
export class UsersModule {}
