import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"],
})
export class UserEditComponent implements OnInit {
  mode = "edit";
  id = "";
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get("id");
  }
}
