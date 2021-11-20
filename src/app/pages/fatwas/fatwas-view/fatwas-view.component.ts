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

  selectedWriter: any = "";

  mufthi = [
    { id: 1, name: "student", student: true },
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
  checker = [
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

  categories = [
    { id: 1, name: "category 1" },
    { id: 2, name: "category 2" },
    { id: 3, name: "category 3" },
    { id: 4, name: "category 4" },
    { id: 5, name: "category 5" },
    { id: 6, name: "category 6" },
    { id: 7, name: "category 7" },
    { id: 8, name: "category 8" },
    { id: 9, name: "category 9" },
  ];
  madhab = [
    { id: 1, name: "Hanafi" },
    { id: 2, name: "Shafi" },
    { id: 3, name: "Other" },
  ];
  language = [
    { id: 1, name: "Malayalam" },
    { id: 2, name: "English" },
    { id: 3, name: "Urudu" },
    { id: 4, name: "Arabic" },
  ];
  verifier = [
    { id: 1, name: "verifier 1" },
    { id: 2, name: "verifier 2" },
    { id: 3, name: "verifier 3" },
    { id: 4, name: "verifier 4" },
    { id: 5, name: "verifier 5" },
    { id: 6, name: "verifier 6" },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log("selectedWriter", this.selectedWriter);
  }

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
