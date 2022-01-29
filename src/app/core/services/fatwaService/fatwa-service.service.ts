import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FatwaServiceService {

  constructor(private http: HttpClient) { }



  getCategoryList() {
    return this.http.get('/category')
  }

  getQuestionStatusList() {
    return this.http.get('/questionstatus')
  }

  getMadhabList() {
    return this.http.get('/madhab')
  }

  getFatwasList() {
    return this.http.get('/questions')
  }
}
