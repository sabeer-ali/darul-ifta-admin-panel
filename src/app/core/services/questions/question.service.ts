import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  postQuestionsItem(body) {
    return this.http.post(`/questions`, body);
  }
  updateQuestionsItem(parms, body?) {
    if (body) {
      return this.http.put(`/questions${parms}`, body);
    } else {
      return this.http.put(`/questions${parms}`, {});
    }
  }
  getQuestionsList(parms?: string) {
    console.log(parms);
    if (parms) {
      return this.http.get(`/questions?${parms}`);
    } else return this.http.get("/questions");
  }
}
