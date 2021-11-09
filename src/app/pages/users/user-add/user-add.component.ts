import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.css"],
})
export class UserAddComponent implements OnInit {
  roleList = [
    { id: 1, name: "Mufthi" },
    { id: 2, name: "Student" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
