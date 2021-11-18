import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fatwas-list",
  templateUrl: "./fatwas-list.component.html",
  styleUrls: ["./fatwas-list.component.css"],
})
export class FatwasListComponent implements OnInit {
  list: any[] = [];
  q: any;
  status = [
    { id: 1, name: "Pending" },
    { id: 2, name: "Submitted to Darul ifta" },
    { id: 3, name: "Rejected" },
    { id: 4, name: "Re-submitted" },
    { id: 5, name: "Published" },
  ];

  madhab = [
    { id: 1, name: "Hanafi" },
    { id: 2, name: "Shafi" },
    { id: 3, name: "Common" },
  ];

  category = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ];

  subCategory = [
    { id: 1, name: "Sub Category 1" },
    { id: 2, name: "Sub Category 2" },
    { id: 3, name: "Sub Category 3" },
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

  mustafthi = [
    { id: 1, name: "sabeer 1" },
    { id: 2, name: "aashik 2" },
    { id: 3, name: "john 3" },
    { id: 4, name: "sabu 4" },
    { id: 5, name: "manu 5" },
    { id: 6, name: "vishal 6" },
    { id: 7, name: " lal 7" },
    { id: 8, name: "mustafthi 8" },
    { id: 9, name: "mustafthi 9" },
    { id: 10, name: "mustafthi 10" },
  ];

  selectedCategory: any = null;

  constructor() {}

  ngOnInit(): void {
    this.getFatwaList();
  }

  getFatwaList() {
    for (let i = 1; i <= 15; i++) {
      this.list.push({
        qid: i,
        mustafthi: "mustafthi" + i,
        shortQ:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        createDate: "12-11-2021",
        category: "category" + i,
        madhab: i > 5 ? "Other" : i > 7 ? "Shafi" : "hanafi",
        mufthi: i % 2 === 0 ? "mufthi 1" : "mufthi 2",
        status:
          i > 2 && i < 5
            ? "Pending"
            : i > 5 && i < 8
            ? "Published"
            : "Verifying",
        dos: i + "-10-2021",
      });
    }
  }
}
