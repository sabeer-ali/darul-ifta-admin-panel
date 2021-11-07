import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "dashboard-cmp",
  moduleId: module.id,
  templateUrl: "dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  list: any[] = [];
  q: any = 0;
  ngOnInit() {
    this.getfatwasList();
  }

  getfatwasList() {
    for (let i = 1; i <= 10; i++) {
      this.list.push({
        id: i,
        MUSTAFTHI: "name" + i,
        CATEGORY: i % 2 === 0 ? "CATEGORY 1" : "CATEGORY 2",
        MADHAB: i % 2 === 0 ? "MADHAB 1" : "MADHAB 2",
        status:
          i > 3 && i < 5
            ? "Rejected"
            : i > 5 && i < 7
            ? "Published"
            : i > 7 && i < 10
            ? "on hold"
            : "In Progress",
      });
    }
  }
}
