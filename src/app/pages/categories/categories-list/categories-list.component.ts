import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.css"],
})
export class CategoriesListComponent implements OnInit {
  list: any[] = [];
  q: any;
  constructor() {}

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    for (let i = 1; i <= 10; i++) {
      this.list.push({
        mainCategory: "mainCategory" + i,
        mainCatNo: i % 2 === 0 ? 10 : i > 2 && i < 5 ? 5 : 15,
        subCategory: [
          { id: i, sub: "sub" + i },
          { id: i + 1, sub: "sub" + i + 1 },
          { id: i + 2, sub: "sub" + i + 2 },
        ],
      });
    }
  }
}
