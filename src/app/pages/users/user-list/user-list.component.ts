import { Component, OnInit } from "@angular/core";
import { UserService } from "app/core/services/users/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  list: any = [];
  q: any;
  constructor(private userServices: UserService) {}

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.userServices
      .getUserList("user_type=2&&user_type=4")
      .subscribe((res) => {
        this.list = res;
      });
  }
}
