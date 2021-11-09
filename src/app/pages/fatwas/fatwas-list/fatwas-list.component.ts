import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fatwas-list",
  templateUrl: "./fatwas-list.component.html",
  styleUrls: ["./fatwas-list.component.css"],
})
export class FatwasListComponent implements OnInit {
  list: any[] = [];
  q: any;
  cities = [
    { id: 1, name: "Vilnius" },
    { id: 2, name: "Kaunas" },
    { id: 3, name: "Pavilnys", disabled: true },
    { id: 4, name: "Pabradė" },
    { id: 5, name: "Klaipėda" },
  ];
  constructor() {}

  ngOnInit(): void {
    this.getFatwaList();
  }

  getFatwaList() {
    for (let i = 1; i <= 15; i++) {
      this.list.push({
        qid: i,
        mustafthi: "mustafthi" + i,
        category: "category" + i,
        madhab: i > 5 ? "Other" : i > 7 ? "Shafi" : "hanafi",
        mufthi: i % 2 === 0 ? "mufthi 1" : "mufthi 2",
        status:
          i > 2 && i < 5
            ? "Pending"
            : i > 5 && i < 8
            ? "Published"
            : "In Progress",
        dos: i + "-10-2021",
      });
    }
  }
}
