import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticleRoutingModule } from "./article-routing.module";
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleViewComponent, ArticleEditComponent],
  imports: [CommonModule, ArticleRoutingModule],
})
export class ArticleModule {}
