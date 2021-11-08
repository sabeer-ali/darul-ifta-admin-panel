import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-mustafthi-edit",
  templateUrl: "./mustafthi-edit.component.html",
  styleUrls: ["./mustafthi-edit.component.css"],
})
export class MustafthiEditComponent implements OnInit {
  @Input() editMode = true;
  user: { id: number };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Edit Mode ===>", this.editMode);
    this.user = { id: this.route.snapshot.params["id"] };
    this.route.params.subscribe((paramList: Params) => {
      this.user.id = paramList["id"];
    });
  }
}
