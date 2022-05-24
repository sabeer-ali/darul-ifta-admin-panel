import { Component, OnInit, TemplateRef } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { AnswersService } from "app/core/services/answers/answers.service";
import { Location } from "@angular/common";

import { CategoryService } from "app/core/services/categoryServices/category.service";
import { CommonService } from "app/core/services/common/common.service";
import { QuestionService } from "app/core/services/questions/question.service";
import { UserService } from "app/core/services/users/user.service";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-fatwas-view",
  templateUrl: "./fatwas-view.component.html",
  styleUrls: ["./fatwas-view.component.css"],
})
export class FatwasViewComponent implements OnInit {
  showReference: Boolean = false;
  referenceList: any = [
    {
      quotes: "",
      bookName: "",
      vol: "",
      pgNo: "",
    },
  ];

  selectedWriter: any = null;
  selectedVerifier: any = null;

  allUser: any = [];
  mufthi: any = [];
  checker: any = [];
  verifier: any = [];

  categories: any = [];
  madhab: any = [];
  language: any = [];

  details: any = null;
  fatwaStatus: number = 0;
  form: FormGroup;
  config: AngularEditorConfig = {
    editable: this.fatwaStatus === 7 ? false : true,
    spellcheck: true,
    height: "15rem",
    minHeight: "5rem",
    placeholder: "Enter answers here...",
    translate: "no",
    // enableToolbar: false,
    // showToolbar: false,
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: "redText",
        class: "redText",
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
  };

  // modalRef?: BsModalRef;
  rejectReasonList: any;
  answerDetails: any;
  isRtlLanguage = false;

  closeResult = "";

  selectedRejectReason = null;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionService,
    private fb: FormBuilder,
    private cs: CategoryService,
    private commonServices: CommonService,
    private userServices: UserService,
    private answerService: AnswersService,
    private location: Location,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = "static";
    config.keyboard = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.getUserList();
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
      fawaAnswer: [""],
    });

    this.getSubCategory();
    this.getMadhabList();
    this.getLanguageList();
    this.getAllRejectedReasons();
  }

  onItemChange(value) {
    console.log("00003", value.value, value.id);
  }

  getAllRejectedReasons() {
    this.commonServices.getUserRejectStatusList().subscribe((res) => {
      this.rejectReasonList = res;
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll((reason) => {});
    console.log("Reason", this.selectedRejectReason, this.fatwaStatus);
    this.handleSave();
  }

  async getUserList() {
    this.userServices
      .getUserList("user_type=2&&user_type=4")
      .subscribe((res) => {
        this.allUser = res;
        this.mufthi = res;
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
      this.isRtlLanguage =
        this.details?.language?.id == 4 || this.details?.language?.id == 3;
      this.fatwaStatus = this.details.status.id;
      this.form.patchValue({ short_question: this.details.short_question });
      this.form.patchValue({ question: this.details.question });
      if (this.details?.mufti) this.selectedWriter = this.details?.mufti;
      if (this.details?.mufti_answered === 1) {
        let parms = `?question_id=${this.details.id}`;
        this.answerService.getAnswerItem(parms).subscribe((res) => {
          this.answerDetails = res;
          this.answerDetails = this.answerDetails[0];
          this.form.patchValue({ fawaAnswer: this.answerDetails.answer });
          this.referenceList = this.answerDetails.reference;
        });

        this.getVerifierList();
      }
    });
  }
  getVerifierList() {
    this.verifier = this.allUser.filter((fi) => fi.id != this.details.mufti.id);
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
      quotes: "",
      bookName: "",
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

      const index = this.categories.findIndex(
        (fi) => fi.id == this.details?.sub_category.id
      );
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
  getVerifier(values: any) {
    this.selectedVerifier = values;
  }

  handleSave() {
    console.log("Thsi ---- ", this.form, this.details);

    const { id } = this.details;
    const {
      short_question,
      question,
      categories,
      madhab,
      language,
      fawaAnswer,
    } = this.form.value;

    let payload = {};

    if (this.fatwaStatus === 1) {
      payload = {
        id,
        status: 4,
      };
    }
    console.log("this.details ---- ", this.details);

    let params = "";
    let body = {};

    if (this.fatwaStatus === 1) {
      if (this.selectedRejectReason) {
        params = `?id=${id}&status=2&mufti=2`;
        body = {
          reject_reason: this.selectedRejectReason?.id,
          nextStatus: 2,
        };
      } else {
        params = `?id=${id}&status=${this.fatwaStatus}`;
      }
      console.log("params, body in Reject ", params, body);

      this.questionsService.updateQuestionsItem(params).subscribe((res) => {
        console.log("Res Questions 1", res);
        this.location.back();
      });
    } else if (this.fatwaStatus === 4) {
      params = `?id=${id}&status=${this.fatwaStatus}&mufti=${this.selectedWriter?.id}`;
      this.questionsService.updateQuestionsItem(params).subscribe((res) => {
        console.log("Res Questions 4", res);
        this.location.back();
      });
    } else if (this.fatwaStatus === 5) {
      if (this.selectedRejectReason) {
        params = `?id=${id}&status=2&mufti=${this.selectedWriter?.id}`;
        body = {
          reject_reason: this.selectedRejectReason?.id,
          nextStatus: 2,
        };
        console.log("params, body in Reject ", params, body);
      } else {
        params = `?id=${id}&status=${this.fatwaStatus}&mufti=${this.selectedWriter?.id}&mufti_answered=1`;
        body = {
          answer: fawaAnswer,
          reference: this.referenceList,
          nextStatus: 6,
        };
        console.log("params, body", params, body);
      }
      this.questionsService
        .updateQuestionsItem(params, body)
        .subscribe((res) => {
          console.log("Res Questions 5", res);
          this.location.back();
        });
    } else if (this.fatwaStatus === 6) {
      params = `?id=${id}&status=${this.fatwaStatus}`;
      body = {
        answer: fawaAnswer,
        reference: this.referenceList,
        nextStatus: 7,
        verified_by: this.selectedVerifier?.id,
      };
      this.questionsService
        .updateQuestionsItem(params, body)
        .subscribe((res) => {
          console.log("Res Questions 6", res);
          this.location.back();
        });
    } else if (this.fatwaStatus === 7) {
      params = `?id=${id}&status=${this.fatwaStatus}`;
      this.questionsService.updateQuestionsItem(params).subscribe((res) => {
        console.log("Res Questions 7", res);
        this.location.back();
      });
    }
  }
}
