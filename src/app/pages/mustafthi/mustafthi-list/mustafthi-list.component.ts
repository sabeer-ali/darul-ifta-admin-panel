import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mustafthi-list",
  templateUrl: "./mustafthi-list.component.html",
  styleUrls: ["./mustafthi-list.component.css"],
})
export class MustafthiListComponent implements OnInit {
  list: any[] = [];
  q: any;
  constructor() {}

  ngOnInit(): void {
    this.getMustafthiList();
  }

  getMustafthiList() {
    for (let i = 1; i <= 15; i++) {
      this.list.push({
        slNo: i,
        fullname: "Name" + i,
        mobileNo: 94007202 + i,
        email: "mail-" + i + "@mail.com",
      });
    }
  }
}
