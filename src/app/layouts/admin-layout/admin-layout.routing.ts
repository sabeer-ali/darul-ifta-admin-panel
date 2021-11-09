import { Routes } from "@angular/router";
import { ArticleViewComponent } from "./../../pages/article/article-view/article-view.component";
import { ArticleListComponent } from "./../../pages/article/article-list/article-list.component";
import { UsersListComponent } from "./../../pages/user/users-list/users-list.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { ArticleEditComponent } from "app/pages/article/article-edit/article-edit.component";

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
  { path: "user-management", component: UsersListComponent },
  {
    path: "article-management",
    component: ArticleListComponent,
    children: [
      { path: "edit", component: ArticleEditComponent },
      { path: "view", component: ArticleViewComponent },
    ],
  },
];
