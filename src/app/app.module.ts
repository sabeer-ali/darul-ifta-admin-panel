import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BasepathInterceptor } from "./core/auth/interceptors/basepath.interceptor";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    NgxPaginationModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasepathInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
