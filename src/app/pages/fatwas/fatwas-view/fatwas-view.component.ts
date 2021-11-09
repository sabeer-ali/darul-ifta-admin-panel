import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fatwas-view",
  templateUrl: "./fatwas-view.component.html",
  styleUrls: ["./fatwas-view.component.css"],
})
export class FatwasViewComponent implements OnInit {
  showReference: Boolean = true;
  referenceList: any[] = [
    {
      bName: "",
      vol: "",
      pgNo: "",
    },
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
