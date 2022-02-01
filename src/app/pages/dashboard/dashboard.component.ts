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
    this.questionServices.getQuestionsList(parms).subscribe((res) => {
      this.list = res;
    });

    // for (let i = 1; i <= 10; i++) {
    //   this.list.push({
    //     id: i,
    //     MUSTAFTHI: "name" + i,
    //     shortQ:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //     CATEGORY: i % 2 === 0 ? "CATEGORY 1" : "CATEGORY 2",
    //     MADHAB: i % 2 === 0 ? "Hanafi" : "Shafi",
    //     createdDate: "12-11-2021",
    //     status:
    //       i > 3 && i < 5
    //         ? "Rejected"
    //         : i > 5 && i < 7
    //           ? "Published"
    //           : i > 7 && i < 10
    //             ? "on hold"
    //             : "Verifying",
    //   });
    // }
  }
}
