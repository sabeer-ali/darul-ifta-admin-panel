import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.css"],
})
export class UserAddComponent implements OnInit {
  @Input() mode = "";
  roleList = [
    { id: 1, name: "Mufthi" },
    { id: 2, name: "Student" },
  ];
  activlist = [
    { id: 1, name: "Active" },
    { id: 2, name: "Inactive" },
  ];
  madhab = [
    { id: 1, name: "Shafi" },
    { id: 2, name: "Hanafi" },
    { id: 3, name: "Other" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
