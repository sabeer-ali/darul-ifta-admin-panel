import { Component, OnInit } from "@angular/core";
import { CategoryService } from "app/core/services/categoryServices/category.service";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.css"],
})
export class CategoriesListComponent implements OnInit {
  list: any[] = [];
  q: any;
  mainCategory: any
  subcategory: any

  constructor(private categoryServices: CategoryService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryServices.getCategoryList().subscribe(res => {
      this.mainCategory = res
      this.getSubCategory();
    })
  }

  getSubCategory() {
    this.categoryServices.getSubCategoryList().subscribe(res => {
      this.subcategory = res;

      let temp = []
      for (let i = 0; i < this.mainCategory.length; i++) {
        let obj = { cat_id: this.mainCategory[i].id, cat_title: this.mainCategory[i].title, subcategorie: [] }
        if (this.mainCategory[i].title !== '') temp.push(obj)
      }

      for (let j = 0; j < this.subcategory.length; j++) {
        let index = temp.findIndex(fi => fi.cat_id === this.subcategory[j].category_id)
        if (index !== -1) {
          temp[index].subcategorie.push(this.subcategory[j].title)
        }
      }
      this.list = temp
    })
  }

}
