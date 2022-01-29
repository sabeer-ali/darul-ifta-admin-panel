import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [],
  imports: [SharedModule, CommonModule, NgxPaginationModule,],
})
export class DashboardModule { }
