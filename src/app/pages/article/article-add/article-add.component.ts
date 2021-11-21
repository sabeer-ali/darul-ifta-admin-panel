import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-article-add",
  templateUrl: "./article-add.component.html",
  styleUrls: ["./article-add.component.css"],
})
export class ArticleAddComponent implements OnInit {
  @Input() mode = "add";
  muftiNameList = [
    { id: 1, name: "mufthi 1" },
    { id: 2, name: "mufthi 2" },
    { id: 3, name: "mufthi 3" },
    { id: 4, name: "mufthi 4" },
    { id: 5, name: "mufthi 5" },
  ];
  lang = [
    { id: 1, name: "Malayalam" },
    { id: 2, name: "English" },
    { id: 3, name: "Urudu" },
    { id: 4, name: "Arabic" },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log("mode ====", this.mode);
  }
}
