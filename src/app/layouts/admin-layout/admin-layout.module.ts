import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

import { NotificationsComponent } from "../../pages/notifications/notifications.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    NgxPaginationModule,
  ],
  declarations: [DashboardComponent, NotificationsComponent],
})
export class AdminLayoutModule {}
