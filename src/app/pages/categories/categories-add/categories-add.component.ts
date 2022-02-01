import { Component, Input, OnInit } from "@angular/core";
import { CategoryService } from "app/core/services/categoryServices/category.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-categories-add",
  templateUrl: "./categories-add.component.html",
  styleUrls: ["./categories-add.component.css"],
})
export class CategoriesAddComponent implements OnInit {
  @Input() isEditMode = false;

  ngOnChange() {
    console.log("isEditMode ====>", this.isEditMode);
  }

  category: any = [];
  subcategory: any = [];
  form: FormGroup;
  id: string;
  selectedCategory: any = null;
  changedSubCategory: any = [];

  constructor(
    private categoryServices: CategoryService,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log("isEditMode", this.isEditMode);
    this.id = this.router.snapshot.paramMap.get("id");

    this.form = this.fb.group({
      category: [[], Validators.required],
      subcategory: [[], Validators.required],
    });

    if (this.isEditMode) {
      let parms = `id=${this.id}`;
      console.log("parms", parms);
      this.getCategoryList(parms);
    } else this.getCategoryList();
  }

  getCategoryList(parms?: any) {
    this.categoryServices.getCategoryList(parms).subscribe((res) => {
      this.category = res;
      if (this.isEditMode) {
        console.log("asda", this.category);
        this.changeCat(this.category[0]);
      }
    });
  }

  create() {
    const { category, subcategory } = this.form.value;
    let payload = {
      title: category,
    };

    let subCat = {
      category_id: category,
      title: subcategory.map((item) => item.title),
    };
    console.log("category", payload, typeof payload.title);
    console.log("Sub Category", subCat);

    if (typeof category !== "number") {
      this.categoryServices.postCategoies(payload).subscribe((res) => {
        console.log("res in Cat create", res);
        subCat.category_id = res["id"];
        this.categoryServices.postSubCategories(subCat).subscribe((res2) => {
          this.form.reset();
          this.location.back();
        });
      });
    } else {
      this.categoryServices.postSubCategories(subCat).subscribe((res2) => {
        this.form.reset();
        this.location.back();
      });
    }
  }

  update() {
    let { category } = this.form.value;
    let catPayload = {
      title: category,
    };

    let subCatPayload = {
      category_id: this.category[0].id,
      data: this.changedSubCategory.map((item) => {
        return { id: item.id, title: item.title };
      }),
    };

    if (this.form.value.category.length && this.changedSubCategory.length) {
      this.categoryServices
        .updateCategoies(this.category[0].id, catPayload)
        .subscribe((resCat) => {
          console.log("Res Cat ", resCat);
          if (this.changedSubCategory.length) {
            this.categoryServices
              .updateSubCategoies(subCatPayload)
              .subscribe((res) => {
                this.location.back();
              });
          } else {
            this.location.back();
          }
        });
    } else if (
      this.form.value.category.length &&
      !this.changedSubCategory.length
    ) {
      this.categoryServices
        .updateCategoies(this.category[0].id, catPayload)
        .subscribe((resCat) => {
          console.log("Res Cat ", resCat);
          this.location.back();
        });
    } else if (
      !this.form.value.category.length &&
      this.changedSubCategory.length
    ) {
      this.categoryServices
        .updateSubCategoies(subCatPayload)
        .subscribe((res) => {
          this.location.back();
        });
    } else {
      alert("NO Values Changed");
    }
  }

  changeCat(event: any) {
    this.subcategory = [];
    this.form.get("subcategory").reset();
    try {
      this.categoryServices.getSubCategoryList(event.id).subscribe((res) => {
        console.log("res SC", res);
        this.subcategory = res;
      });
    } catch (e) {
      console.warn(e);
    }
  }

  addCategory = (text: string) => ({ id: text, title: text });
  addSubCategory = (text: string) => ({ title: text });

  subCatChanges(data: any) {
    let index = this.subcategory.findIndex((fi) => fi.title === data.title);
    console.log("Title ===> ", index);
    let indexId = this.changedSubCategory.findIndex((fi) => fi.id === data.id);
    if (index !== -1) {
      if (indexId === -1) {
        this.changedSubCategory.push(data);
      }
    }
  }
}
