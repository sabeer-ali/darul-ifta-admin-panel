import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
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

  selectedWriter: any = "";

  mufthi: any = [];
  checker = [
    { id: 1, name: "Mufthi 1" },
    { id: 2, name: "Mufthi 2" },
    { id: 3, name: "Mufthi 3" },
    { id: 4, name: "Mufthi 4" },
    { id: 5, name: "Mufthi 5" },
    { id: 6, name: "Mufthi 6" },
    { id: 7, name: "Mufthi 7" },
    { id: 8, name: "Mufthi 8" },
    { id: 9, name: "Mufthi 9" },
    { id: 10, name: "Mufthi 10" },
  ];

  categories: any = [];
  madhab: any = [];
  language: any = [];
  verifier: any = [];

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
        this.mufthi = res;
      });

    this.userServices.getUserList("user_type=5").subscribe((res) => {
      this.verifier = res;
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
}
