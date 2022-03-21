import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { CategoryService } from "app/core/services/categoryServices/category.service";
import { CommonService } from "app/core/services/common/common.service";
import { FatwaServiceService } from "app/core/services/fatwaService/fatwa-service.service";
import { QuestionService } from "app/core/services/questions/question.service";

@Component({
  selector: "app-fatwas-list",
  templateUrl: "./fatwas-list.component.html",
  styleUrls: ["./fatwas-list.component.css"],
})
export class FatwasListComponent implements OnInit {
  list: any = [];
  q: any;
  status: any = [];
  madhab: any;
  category: any = [];
  language: any = [];
  subCategory: any = [];
  mufthi: any = [];
  mustafthi: any = [];
  form: FormGroup;
  selectedCategory: any = null;
  selectedStatus: any = null;
  selectedMadhab: any = null;
  selectedSubCategory: any = null;
  selectedMufthi: any = null;
  selectedMustafthi: any = null;
  selectedLanguage: any = null;
  searchText: string = "";

  constructor(
    private fatwaServices: FatwaServiceService,
    private categoryService: CategoryService,
    private commonServices: CommonService,
    private questionsService: QuestionService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCategoryList();
    this.getLanguageList();
    this.getMadhabList();
    this.getStatusList();
    this.getFatwaList();
    this.getUser();
    this.getAllQuestions();
  }

  handleSearch() {}
  getLanguageList() {
    this.commonServices.getLanguageList().subscribe((res) => {
      this.language = res;
    });
  }

  getChangeFilter() {
    let obj = {
      category: this.selectedCategory,
      status: this.selectedStatus,
      madhab: this.selectedMadhab,
      sub_category: this.selectedSubCategory,
      mufti: this.selectedMufthi,
      mustafthi: this.selectedMustafthi,
      language: this.selectedLanguage,
    };
    console.log("Filter PArmsss ==> obj ", obj, this.selectedMufthi);

    let parms = "";
    for (const key in obj) {
      if (obj[key]) {
        console.log("key", key);
        if (key == "mustafthi") {
          parms = parms + "" + "user_id" + "=" + obj[key].id + "&";
        } else {
          parms = parms + "" + key + "=" + obj[key].id + "&";
        }
      }
    }
    parms = parms?.slice(0, -1);
    console.log("Filter PArmsss ==>", parms);
    this.getAllQuestions(parms);
  }

  getAllQuestions(parms?: string) {
    this.questionsService.getQuestionsList(parms).subscribe((res) => {
      this.list = res;
    });
  }

  getUser() {
    // type 2 : mufthi,type 3 : musthafthi
    this.commonServices.getUserList(2).subscribe((res) => {
      this.mufthi = res;
    });
    this.commonServices.getUserList(3).subscribe((response) => {
      this.mustafthi = response;
    });
  }

  chooseCategory(event: any) {
    this.getSubCategory(event.id);
  }

  getSubCategory(id: number) {
    this.categoryService.getSubCategoryList(id).subscribe((res) => {
      this.subCategory = res;
    });
  }

  getCategoryList() {
    this.fatwaServices.getCategoryList().subscribe((res) => {
      this.category = res;
    });
  }

  getStatusList() {
    this.fatwaServices.getQuestionStatusList().subscribe((res) => {
      this.status = res;
    });
  }

  getMadhabList() {
    this.fatwaServices.getMadhabList().subscribe((res) => {
      this.madhab = res;
    });
  }

  getFatwaList() {
    this.fatwaServices.getFatwasList().subscribe((res) => {
      console.log("Res 0", res);
    });
    // for (let i = 1; i <= 15; i++) {
    //   this.list.push({
    //     qid: i,
    //     mustafthi: "mustafthi" + i,
    //     shortQ:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //     createDate: "12-11-2021",
    //     category: "category" + i,
    //     madhab: i > 5 ? "Other" : i > 7 ? "Shafi" : "hanafi",
    //     mufthi: i % 2 === 0 ? "mufthi 1" : "mufthi 2",
    //     status:
    //       i > 2 && i < 5
    //         ? "Pending"
    //         : i > 5 && i < 8
    //         ? "Published"
    //         : "Verifying",
    //     dos: i + "-10-2021",
    //   });
    // }
  }
}
