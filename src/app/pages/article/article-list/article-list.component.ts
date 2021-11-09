import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"],
})
export class ArticleListComponent implements OnInit {
  list: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getArticleList();
  }

  getArticleList() {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        slNo: i,
        subject: "subject" + i,
        doc: i + "-10-2021",
        dop: i + 2 + "-10-2021",
        status: i < 7 ? "Published" : "Draft",
      });
    }
  }
}
