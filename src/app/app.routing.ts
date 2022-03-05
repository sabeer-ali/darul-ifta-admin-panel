import { Routes } from "@angular/router";
import { GuardGuard } from "./core/auth/guard/guard.guard";
import { AuthService } from "./core/services/auth/auth.service";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./pages/login/login.component";

export const AppRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
      },
    ],
    canActivate: [GuardGuard],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];
