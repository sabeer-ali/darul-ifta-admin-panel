import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Home", icon: "nc-bank", class: "" },
  {
    path: "/fatwa-management",
    title: "fatwa ",
    icon: "fa fa-table",
    class: "",
  },
  {
    path: "/article-management",
    title: "Article ",
    icon: "fa fa-columns",
    class: "",
  },
  {
    path: "/category-management",
    title: "category",
    icon: "fa fa-file-text",
    class: "",
  },
  {
    path: "/user-management",
    title: "User ",
    icon: "fa fa-users",
    class: "",
  },
  {
    path: "/mustafthi-managment",
    title: "Mustafthi",
    icon: "fa fa-list-alt",
    class: "",
  },
  //   { path: "/icons", title: "Icons", icon: "nc-diamond", class: "" },
  //   { path: "/maps", title: "Maps", icon: "nc-pin-3", class: "" },
  //   {
  //     path: "/notifications",
  //     title: "Notifications",
  //     icon: "nc-bell-55",
  //     class: "",
  //   },
  //   { path: "/user", title: "User Profile", icon: "nc-single-02", class: "" },
  //   { path: "/table", title: "Table List", icon: "nc-tile-56", class: "" },
  //   {
  //     path: "/typography",
  //     title: "Typography",
  //     icon: "nc-caps-small",
  //     class: "",
  //   },
  //   {
  //     path: "/upgrade",
  //     title: "Upgrade to PRO",
  //     icon: "nc-spaceship",
  //     class: "active-pro",
  //   },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
  styleUrls: ["sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
