import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mustafthi-create",
  templateUrl: "./mustafthi-create.component.html",
  styleUrls: ["./mustafthi-create.component.css"],
})
export class MustafthiCreateComponent implements OnInit {
  mode: "user-add";
  user: { id: number };
  gender = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
