import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fatwas-view",
  templateUrl: "./fatwas-view.component.html",
  styleUrls: ["./fatwas-view.component.css"],
})
export class FatwasViewComponent implements OnInit {
  showReference: Boolean = false;
  referenceList: any[] = [
    {
      bName: "",
      vol: "",
      pgNo: "",
    },
  ];

  mufthi = [
    { id: 1, name: "Mufthi 1" },
    { id: 2, name: "Mufthi 2" },
    { id: 3, name: "Mufthi 3" },
    { id: 4, name: "Mufthi 4" },
    { id: 5, name: "Mufthi 5" },
    { id: 6, name: "Mufthi 6" },
    { id: 7, name: "Mufthi 7" },
    { id: 8, name: "Mufthi 8" },
    { id: 9, name: "Mufthi 9" },
    { id: 10, name: "Mufthi 10" },
  ];
  constructor() {}

  ngOnInit(): void {}

  togleReference() {
    this.showReference = !this.showReference;
  }

  addReference(e: any) {
    e.stopPropagation();

    this.referenceList.push({
      bName: "",
      vol: "",
      pgNo: "",
    });
  }
  removeReference(id: number) {
    this.referenceList.splice(id, 1);
  }
}
