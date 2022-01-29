import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestionsList(parms?: string) {

    console.log(parms)
    if (parms) {
      return this.http.get(`/questions?${parms}`)
    } else
      return this.http.get('/questions')
  }
}
