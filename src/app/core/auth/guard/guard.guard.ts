import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "app/core/services/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class GuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate() {
    console.log("this.authService.isLoggedIn", this.authService.isLoggedIn);
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
