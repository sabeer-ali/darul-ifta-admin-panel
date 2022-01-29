import { Component, Input, OnInit } from "@angular/core";
import { CategoryService } from "app/core/services/categoryServices/category.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

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
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log("isEditMode", this.isEditMode);
    this.id = this.router.snapshot.paramMap.get("id");
    console.log("isEditMode id", this.id);

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
      console.log("REss getCategoryList", res);
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
      title: subcategory[0].title,
    };
    if (typeof category !== "number") {
      this.categoryServices.postCategoies(payload).subscribe((res) => {
        this.categoryServices.postSubCategoies(subCat).subscribe((res2) => {
          this.form.reset();
        });
      });
    } else {
      this.categoryServices.postSubCategoies(subCat).subscribe((res2) => {
        this.form.reset();
      });
    }
  }

  update() {
    let { category } = this.form.value;
    if (this.form.value.category.length) {
      let catPayload = {
        title: category,
      };
      this.categoryServices
        .updateCategoies(this.category[0].id, catPayload)
        .subscribe((resCat) => {
          console.log("Res CAt", resCat);
        });
    }

    if (this.changedSubCategory.length) {
      this.changedSubCategory.map((item: any) => {
        this.categoryServices
          .updateSubCategoies({
            category_id: this.subcategory[0].id,
            id: item.id,
            title: item.title,
          })
          .subscribe((res) => {
            console.log("Rezzz", res);
          });
      });
    }
  }

  changeCat(event: any) {
    console.log(" Sub Category ID", event);
    this.categoryServices.getSubCategoryList(event.id).subscribe((res) => {
      this.subcategory = res;
    });
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
