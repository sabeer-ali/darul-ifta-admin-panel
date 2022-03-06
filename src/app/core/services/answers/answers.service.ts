import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AnswersService {
  constructor(private http: HttpClient) {}

  postAnswer(data) {
    return this.http.post("/answers", data);
  }
}
