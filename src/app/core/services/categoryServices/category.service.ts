import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getSubCategoryList(id?: number) {
    if (id) {
      return this.http.get(`/subcategories?category_id=${id}`);
    } else return this.http.get(`/subcategories`);
  }

  postSubCategoies(body: any) {
    return this.http.post("/subcategories", body);
  }

  getCategoryList(parms?) {
    if (parms) {
      return this.http.get(`/category?${parms}`);
    } else return this.http.get("/category");
  }

  updateSubCategoies(body: any) {
    return this.http.put(`/subcategories`, body);
  }

  updateCategoies(id: number, body: any) {
    console.log("id - body", id, body);
    return this.http.put(`/category/${id}`, body);
  }

  postCategoies(body: any) {
    return this.http.post("/category", body);
  }
}
