import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MustafthiListComponent } from "./mustafthi-list/mustafthi-list.component";
import { MustafthiViewComponent } from "./mustafthi-view/mustafthi-view.component";
import { MustafthiEditComponent } from "./mustafthi-edit/mustafthi-edit.component";

@NgModule({
  declarations: [
    MustafthiListComponent,
    MustafthiViewComponent,
    MustafthiEditComponent,
  ],
  imports: [CommonModule],
})
export class MustafthiModule {}
