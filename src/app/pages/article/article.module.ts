import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { NgSelectModule } from "@ng-select/ng-select";

import { ArticleRoutingModule } from "./article-routing.module";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleViewComponent } from "./article-view/article-view.component";
import { ArticleEditComponent } from "./article-edit/article-edit.component";
import { ArticleAddComponent } from "./article-add/article-add.component";

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleViewComponent,
    ArticleEditComponent,
    ArticleAddComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NgxPaginationModule,
    NgSelectModule,
  ],
})
export class ArticleModule {}
