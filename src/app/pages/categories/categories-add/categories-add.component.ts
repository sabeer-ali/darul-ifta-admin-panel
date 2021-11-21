import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-categories-add",
  templateUrl: "./categories-add.component.html",
  styleUrls: ["./categories-add.component.css"],
})
export class CategoriesAddComponent implements OnInit {
  @Input() isEditMode = false;
  ngOnChange() {
    console.log("isEditMode ====>", this.isEditMode);
  }

  category = [
    { id: 1, name: "cat 1" },
    { id: 2, name: "cat 2" },
    { id: 3, name: "cat 3" },
    { id: 4, name: "cat 4" },
    { id: 5, name: "cat 5" },
  ];
  subcategory = [
    { id: 1, name: "sub cat 1" },
    { id: 2, name: "sub cat 2" },
    { id: 3, name: "sub cat 3" },
    { id: 4, name: "sub cat 4" },
    { id: 5, name: "sub cat 5" },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log("isEditMode", this.isEditMode);
  }
}
