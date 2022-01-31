import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.css"],
})
export class UserViewComponent implements OnInit {
  mode = "view";
  id = "";
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get("id");
  }
}
