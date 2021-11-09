import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { NgSelectModule } from "@ng-select/ng-select";

import { UsersRoutingModule } from "./users-routing.module";
import { UserListComponent } from "./user-list/user-list.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserAddComponent } from "./user-add/user-add.component";

@NgModule({
  declarations: [UserListComponent, UserEditComponent, UserAddComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxPaginationModule,
    NgSelectModule,
  ],
})
export class UsersModule {}
