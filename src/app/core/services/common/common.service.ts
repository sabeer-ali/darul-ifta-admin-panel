import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getUserStatusList() {
    return this.http.get("/userstatus");
  }

  getRoleList() {
    return this.http.get("/usertypes");
  }

  getMadhabList() {
    return this.http.get("/madhab");
  }

  getLanguageList() {
    return this.http.get("/languages");
  }

  getUserList(type?: number) {
    if (type) {
      return this.http.get(`/user?user_type=${type}`);
    } else {
      return this.http.get("/user");
    }
  }
}
