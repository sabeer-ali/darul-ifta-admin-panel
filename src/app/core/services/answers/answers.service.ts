import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AnswersService {
  constructor(private http: HttpClient) {}

  getAnswerItem(parms) {
    return this.http.get(`/answers${parms}`);
  }
  postAnswer(data) {
    return this.http.post("/answers", data);
  }
}
