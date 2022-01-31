import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mustafthi-view",
  templateUrl: "./mustafthi-view.component.html",
  styleUrls: ["./mustafthi-view.component.css"],
})
export class MustafthiViewComponent implements OnInit {
  mode: string = "user-view";
  constructor() {}

  ngOnInit(): void {}
}
