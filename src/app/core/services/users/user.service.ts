import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Login {
  data: any;
  message: string;
  status: boolean;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserLoggin(params) {
    return this.http.post<Login>(`/user/login`, params);
  }

  getDashboardDetails(parms: string) {
    return this.http.get(`/user/${parms}`);
  }

  updateUserItem(id: any, body: any) {
    return this.http.put(`/user/${id}`, body);
  }

  postUserItem(body: any) {
    return this.http.post("/user", body);
  }

  getUserList(parms?: string) {
    if (parms) {
      return this.http.get(`/user?${parms}`);
    } else return this.http.get("/user");
  }
}
