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
    this.userServices.getUserList("user_type=2").subscribe((res) => {
      this.list = res;
    });

    // for (let i = 0; i <= 10; i++) {
    //   this.list.push({
    //     slNo: i,
    //     firstName: "First Name " + i,
    //     lastName: "last name " + i,
    //     displayName: "dis name " + i,
    //     count: (i * 2) / 2 + (i + i),
    //     role: i < 7 ? "mufthi" : "student",
    //     email: "sample" + i + "@gmail.com",
    //     activeStatus: i < 5 ? "Active" : "Inactive",
    //   });
    // }
  }
}
