import { ArticleViewComponent } from "./../../pages/article/article-view/article-view.component";
import { ArticleListComponent } from "./../../pages/article/article-list/article-list.component";
import { UsersListComponent } from "./../../pages/user/users-list/users-list.component";
import { FatwasViewComponent } from "./../../pages/fatwas/fatwas-view/fatwas-view.component";
import { FatwasListComponent } from "./../../pages/fatwas/fatwas-list/fatwas-list.component";
import { CategoriesViewComponent } from "./../../pages/categories/categories-view/categories-view.component";
import { CategoriesListComponent } from "./../../pages/categories/categories-list/categories-list.component";
import { MustafthiViewComponent } from "./../../pages/mustafthi/mustafthi-view/mustafthi-view.component";
import { MustafthiEditComponent } from "./../../pages/mustafthi/mustafthi-edit/mustafthi-edit.component";
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

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {
    path: "mustafthi-managment",
    component: MustafthiListComponent,
    children: [
      { path: "edit", component: MustafthiEditComponent },
      { path: "view", component: MustafthiViewComponent },
    ],
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

  // { path: 'user',           component: UserComponent },
  // { path: 'table',          component: TableComponent },
  // { path: 'typography',     component: TypographyComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent }
];
