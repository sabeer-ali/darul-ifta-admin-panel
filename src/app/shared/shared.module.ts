import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoDataAvailableComponent } from "./no-data-available/no-data-available.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [NoDataAvailableComponent, FilterPipe, LoaderComponent],
  imports: [CommonModule],
  exports: [NoDataAvailableComponent, FilterPipe, LoaderComponent],
})
export class SharedModule {}
