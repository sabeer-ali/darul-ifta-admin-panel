import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GuardGuard } from "app/core/auth/guard/guard.guard";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  constructor(private route: Router, private authGuard: GuardGuard) {}

  ngOnInit() {
    if (!this.authGuard.canActivate()) {
      this.route.navigateByUrl("/login");
    }
  }
}
