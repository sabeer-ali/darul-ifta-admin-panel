import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";
import { AngularEditorModule } from "@kolkov/angular-editor";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BasepathInterceptor } from "./core/auth/interceptors/basepath.interceptor";
import { SharedModule } from "./shared/shared.module";
import { LoginComponent } from "./pages/login/login.component";
import { AuthService } from "./core/services/auth/auth.service";
import { GuardGuard } from "./core/auth/guard/guard.guard";

import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, LoginComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
      relativeLinkResolution: "legacy",
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    NgxPaginationModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasepathInterceptor, multi: true },
    GuardGuard,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
