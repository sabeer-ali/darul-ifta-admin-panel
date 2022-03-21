import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn() {
    return localStorage.getItem("userAdminData");
  }

  async storeLocalData(data) {
    localStorage.setItem("userAdminData", JSON.stringify(data));
  }

  async getLocalData() {
    let data = localStorage.getItem("userAdminData");
    let result = await JSON.parse(data);
    return result;
  }

  logout() {
    let data = localStorage.getItem("userAdminData");
    console.log("data", data);
    if (data) {
      localStorage.removeItem("userAdminData");
    }
    this.router.navigateByUrl("/login");
  }
}
