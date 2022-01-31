import { UserViewComponent } from "./user-view/user-view.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: "add", component: UserAddComponent },
  { path: "edit/:id", component: UserEditComponent },
  { path: "view/:id", component: UserViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
