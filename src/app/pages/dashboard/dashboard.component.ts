import { Component, OnInit } from "@angular/core";
import { QuestionService } from "app/core/services/questions/question.service";
import { UserService } from "app/core/services/users/user.service";
import Chart from "chart.js";

@Component({
  selector: "dashboard-cmp",
  moduleId: module.id,
  templateUrl: "dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  list: any = [];
  q: any = 0;
  searchText: string = "";
  dashboardDetails: any;

  constructor(
    private questionServices: QuestionService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getfatwasList();
    this.getDashboardItems();
  }
  getDashboardItems() {
    this.userService
      .getDashboardDetails("dashboardDataSets")
      .subscribe((res) => {
        this.dashboardDetails = res;
      });
  }

  handleSearch() {
    if (this.searchText && this.searchText !== "") {
      let params = `id=${this.searchText}`;
      this.getfatwasList(params);
    } else this.getfatwasList();
  }

  getfatwasList(parms?: any) {
    if (!parms) {
      parms = "limit=10&field=createdAt&orderBy=DESC";
    }
    this.questionServices.getQuestionsList(parms).subscribe((res) => {
      this.list = res;
    });
  }
}
