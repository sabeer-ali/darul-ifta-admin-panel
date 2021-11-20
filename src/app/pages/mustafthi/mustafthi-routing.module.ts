import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MustafthiListComponent } from "app/pages/mustafthi/mustafthi-list/mustafthi-list.component";
import { MustafthiCreateComponent } from "./mustafthi-create/mustafthi-create.component";
import { MustafthiEditComponent } from "./mustafthi-edit/mustafthi-edit.component";
import { MustafthiViewComponent } from "./mustafthi-view/mustafthi-view.component";

const routes: Routes = [
  { path: "", component: MustafthiListComponent },
  { path: "edit/:id", component: MustafthiEditComponent },
  { path: "view/:id", component: MustafthiViewComponent },
  { path: "add", component: MustafthiCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MustafthiRoutingModule {}
