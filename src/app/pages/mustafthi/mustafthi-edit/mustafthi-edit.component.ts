import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-mustafthi-edit",
  templateUrl: "./mustafthi-edit.component.html",
  styleUrls: ["./mustafthi-edit.component.css"],
})
export class MustafthiEditComponent implements OnInit {
  @Input() mode = "user-edit";
  id: "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.route.params.subscribe((paramList: Params) => {
      this.id = paramList["id"];
    });
  }
}
