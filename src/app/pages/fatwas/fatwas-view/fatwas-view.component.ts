import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
// import { AngularEditorConfig } from "@kolkov/angular-editor";

import { CategoryService } from "app/core/services/categoryServices/category.service";
import { CommonService } from "app/core/services/common/common.service";
import { QuestionService } from "app/core/services/questions/question.service";
import { UserService } from "app/core/services/users/user.service";

@Component({
  selector: "app-fatwas-view",
  templateUrl: "./fatwas-view.component.html",
  styleUrls: ["./fatwas-view.component.css"],
})
export class FatwasViewComponent implements OnInit {
  showReference: Boolean = false;
  referenceList: any[] = [
    {
      bName: "",
      vol: "",
      pgNo: "",
    },
  ];

  selectedWriter: any = null;

  allUser: any = [];
  mufthi: any = [];
  checker: any = [];
  verifier: any = [];

  categories: any = [];
  madhab: any = [];
  language: any = [];

  details: any = null;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionService,
    private fb: FormBuilder,
    private cs: CategoryService,
    private commonServices: CommonService,
    private userServices: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    if (id) {
      let parms = `id=${id}`;
      this.getAllQuestions(parms);
    }
    this.form = this.fb.group({
      short_question: ["", Validators.required],
      question: ["", Validators.required],
      categories: [[], Validators.required],
      madhab: [[], Validators.required],
      language: [[], Validators.required],
    });

    this.getSubCategory();
    this.getMadhabList();
    this.getLanguageList();
    this.getUserList();
  }

  async getUserList() {
    this.userServices
      .getUserList("user_type=2&&user_type=4")
      .subscribe((res) => {
        this.allUser = res;
        this.mufthi = res;
      });

    this.userServices.getUserList("user_type=5").subscribe((res) => {
      // this.verifier = res;
    });
  }

  getMadhabList() {
    this.commonServices.getMadhabList().subscribe((res) => {
      this.madhab = res;
      const index = this.madhab.findIndex(
        (fi) => fi.id === this.details.madhab.id
      );
      this.form.patchValue({ madhab: this.madhab[index] });
    });
  }

  getLanguageList() {
    this.commonServices.getLanguageList().subscribe((res) => {
      this.language = res;
      const index = this.language.findIndex(
        (fi) => fi.id === this.details.language.id
      );
      this.form.patchValue({ language: this.language[index] });
    });
  }

  getAllQuestions(parms?: string) {
    this.questionsService.getQuestionsList(parms).subscribe((res) => {
      this.details = res?.[0];
      console.log("Details", this.details);
      this.form.patchValue({ short_question: this.details.short_question });
      this.form.patchValue({ question: this.details.question });
    });
  }

  ngOnChanges() {
    console.log("selectedWriter", this.selectedWriter);
  }

  togleReference() {
    this.showReference = !this.showReference;
  }

  addReference(e: any) {
    e.stopPropagation();

    this.referenceList.push({
      bName: "",
      vol: "",
      pgNo: "",
    });
  }
  removeReference(id: number) {
    this.referenceList.splice(id, 1);
  }

  getSubCategory() {
    this.cs.getSubCategoryList().subscribe((res) => {
      this.categories = res;
      console.log("res", res);
      const index = this.categories.findIndex(
        (fi) => fi.id === this.details.sub_category.id
      );
      console.log("index", index);
      this.form.patchValue({ categories: this.categories[index] });
    });
  }

  getwrittenBy(values: any) {
    if (values?.user_type?.id === 4) {
      this.checker = this.mufthi.filter((item) => item.id !== values.id);
      this.verifier = [];
    } else {
      this.verifier = this.mufthi.filter(
        (item) => item.id !== values.id && item.user_type.id !== 4
      );
      this.checker = [];
    }
  }

  getCheckerBy(values: any) {
    this.verifier = this.mufthi.filter(
      (item) => item.id !== values.id && item.user_type.id !== 4
    );
  }
}
