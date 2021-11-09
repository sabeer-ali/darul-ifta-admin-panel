import { Routes } from "@angular/router";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {
    path: "mustafthi-managment",
    loadChildren: () =>
      import("../../pages/mustafthi/mustafthi.module").then(
        (m) => m.MustafthiModule
      ),
    data: { core: { title: "Mustafthi Managment" } },
  },
  {
    path: "category-management",
    loadChildren: () =>
      import("../../pages/categories/categories.module").then(
        (m) => m.CategoriesModule
      ),
    data: { core: { title: "category management" } },
  },
  {
    path: "fatwa-management",
    loadChildren: () =>
      import("../../pages/fatwas/fatwas.module").then((m) => m.FatwasModule),
    data: { core: { title: "fatwa-management" } },
  },
  {
    path: "user-management",
    loadChildren: () =>
      import("../../pages/users/users.module").then((m) => m.UsersModule),
    data: { core: { title: "user-management" } },
  },
  {
    path: "article-management",
    loadChildren: () =>
      import("../../pages/article/article.module").then((m) => m.ArticleModule),
    data: { core: { title: "user-management" } },
  },
];
