import { CategoriesAddComponent } from "./categories-add/categories-add.component";
import { CategoriesEditComponent } from "app/pages/categories/categories-edit/categories-edit.component";
import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: CategoriesListComponent },
  { path: "edit/:id", component: CategoriesEditComponent },
  { path: "add", component: CategoriesAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule { }
