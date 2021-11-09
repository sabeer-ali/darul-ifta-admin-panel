import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleAddComponent } from "./article-add/article-add.component";
import { ArticleEditComponent } from "./article-edit/article-edit.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleViewComponent } from "./article-view/article-view.component";

const routes: Routes = [
  { path: "", component: ArticleListComponent },
  { path: "view", component: ArticleViewComponent },
  { path: "edit", component: ArticleEditComponent },
  { path: "add", component: ArticleAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
