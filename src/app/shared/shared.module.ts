import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoDataAvailableComponent } from "./no-data-available/no-data-available.component";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
  declarations: [NoDataAvailableComponent, FilterPipe],
  imports: [CommonModule],
  exports: [NoDataAvailableComponent, FilterPipe],
})
export class SharedModule {}
