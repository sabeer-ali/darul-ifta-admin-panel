import { Component, OnInit } from "@angular/core";
import { UserService } from "app/core/services/users/user.service";

@Component({
  selector: "app-mustafthi-list",
  templateUrl: "./mustafthi-list.component.html",
  styleUrls: ["./mustafthi-list.component.css"],
})
export class MustafthiListComponent implements OnInit {
  list: any = [];
  q: any;
  filterText: string = "";
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getMustafthiList();
  }

  getMustafthiList() {
    this.userService.getUserList("user_type=3").subscribe((res) => {
      this.list = res;
    });
  }
}
