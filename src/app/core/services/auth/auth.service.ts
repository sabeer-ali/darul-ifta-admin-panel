import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn() {
    return localStorage.getItem("userDetails") ? true : false;
  }
  async storeLocalData(data) {
    localStorage.setItem("userDetails", JSON.stringify(data));
  }

  async getLocalData() {
    let data = localStorage.getItem("userDetails");
    let result = await JSON.parse(data);
    return result;
  }

  logout() {
    let data = localStorage.getItem("userDetails");
    if (data) {
      localStorage.removeItem("userDetails");
      this.router.navigate(["login"]);
    }
  }
}
