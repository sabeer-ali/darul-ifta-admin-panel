import { ArticleViewComponent } from "./../../pages/article/article-view/article-view.component";
import { ArticleListComponent } from "./../../pages/article/article-list/article-list.component";
import { UsersListComponent } from "./../../pages/user/users-list/users-list.component";
import { FatwasViewComponent } from "./../../pages/fatwas/fatwas-view/fatwas-view.component";
import { FatwasListComponent } from "./../../pages/fatwas/fatwas-list/fatwas-list.component";
import { CategoriesViewComponent } from "./../../pages/categories/categories-view/categories-view.component";
import { CategoriesListComponent } from "./../../pages/categories/categories-list/categories-list.component";
import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { MustafthiListComponent } from "app/pages/mustafthi/mustafthi-list/mustafthi-list.component";
import { CategoriesEditComponent } from "app/pages/categories/categories-edit/categories-edit.component";
import { ArticleEditComponent } from "app/pages/article/article-edit/article-edit.component";
import { MustafthiRoutingModule } from "app/pages/mustafthi/mustafthi-routing.module";

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
    component: CategoriesListComponent,
    children: [
      { path: "edit", component: CategoriesEditComponent },
      { path: "view", component: CategoriesViewComponent },
    ],
  },
  {
    path: "fatwa-management",
    component: FatwasListComponent,
    children: [{ path: "view", component: FatwasViewComponent }],
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
