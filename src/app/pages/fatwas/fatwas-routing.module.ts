import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FatwasViewComponent } from "./fatwas-view/fatwas-view.component";
import { FatwasListComponent } from "./fatwas-list/fatwas-list.component";

const routes: Routes = [
  { path: "", component: FatwasListComponent },
  { path: "view/:id", component: FatwasViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatwasRoutingModule {}
