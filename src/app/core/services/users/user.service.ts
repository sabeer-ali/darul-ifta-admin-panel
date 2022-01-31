import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  updateUserItem(id: any, body: any) {
    return this.http.put(`/user/${id}`, body);
  }

  postUserItem(body: any) {
    return this.http.post("/user", body);
  }

  getUserList(parms?: string) {
    console.log(parms);
    if (parms) {
      return this.http.get(`/user?${parms}`);
    } else return this.http.get("/user");
  }
}
