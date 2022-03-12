import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn() {
    return localStorage.getItem("userData") ? true : false;
  }
  async storeLocalData(data) {
    localStorage.setItem("userData", JSON.stringify(data));
  }

  async getLocalData() {
    let data = localStorage.getItem("userData");
    let result = await JSON.parse(data);
    return result;
  }

  logout() {
    let data = localStorage.getItem("userData");
    if (data) {
      localStorage.removeItem("userData");
      this.router.navigate(["login"]);
    }
  }
}
