import { Component, Input, OnInit } from "@angular/core";
import { CommonService } from "app/core/services/common/common.service";
import { UserService } from "app/core/services/users/user.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.css"],
})
export class UserAddComponent implements OnInit {
  @Input() mode = "";
  @Input() id = "";
  roleList: any = [];
  madhabList: any = [];
  activlist: any = [];
  userDetails = null;
  selectedMadhabList: any;
  selectedRoleList: any;
  selectedUseStatusList: any;
  myform: FormGroup;
  selected = [];

  constructor(
    private userServices: UserService,
    private commonService: CommonService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMadhabList();
    this.getRoleList();
    this.getUserStatusList();

    console.log("this.mode", this.mode);

    let parms = this.id ? `id=${this.id}` : undefined;
    if (this.mode)
      this.userServices.getUserList(parms).subscribe((res) => {
        this.userDetails = res[0];
        console.log("this.userDetails", this.userDetails);

        // Madhab Filter default selected
        this.selectedMadhabList = this.madhabList.filter(
          (f) => f.id === this.userDetails.madhab.id
        );
        this.selectedMadhabList = this.selectedMadhabList[0];
        // Madhab Filter default selected --- END
        // RoleLisr Filter default selected
        this.selectedRoleList = this.roleList.filter(
          (f) => f.id === this.userDetails.user_type.id
        );
        this.selectedRoleList = this.selectedRoleList[0];
        // RoleLisr Filter default selected ---- END

        // Active Status Filter default selected
        this.selectedUseStatusList = this.activlist.filter(
          (f) => f.id === this.userDetails.user_status.id
        );
        this.selectedUseStatusList = this.selectedUseStatusList[0];
        console.log("this.selectedUseStatusList", this.selectedUseStatusList);
        // Active Status Filter default selected - END

        this.setDefaultValues();
      });

    this.myform = this.fb.group({
      name: ["", Validators.required],
      display_title: ["", Validators.required],
      email: [
        "",
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ],
      password: ["", Validators.required],
      user_status: [null, Validators.required],
      phone: ["", Validators.pattern("[0-9]{10}")],
      madhab: ["", Validators.required],
      role: ["", Validators.required],
      address: ["", Validators.required],
      street_address: ["", Validators.required],
      pin_code: ["", Validators.pattern("[0-9]{6}")],
    });
    if (this.mode === "view") {
      for (const key in this.myform.controls) {
        this.myform.controls[key].disable();
      }
    }
  }

  setDefaultValues() {
    const {
      address,
      display_title,
      email,
      madhab,
      name,
      password,
      phone,
      pin_code,
      role,
      street_address,
      user_status,
    } = this.userDetails;

    this.myform.patchValue({
      name,
      display_title,
      email,
      password,
      phone,
      address,
      street_address,
      pin_code,
    });
  }

  getMadhabList() {
    this.commonService.getMadhabList().subscribe((res) => {
      this.madhabList = res;
    });
  }

  getRoleList() {
    this.commonService.getRoleList().subscribe((res) => {
      this.roleList = res;
    });
  }

  getUserStatusList() {
    this.commonService.getUserStatusList().subscribe((res) => {
      this.activlist = res;
    });
  }

  handleSubmit() {
    const {
      address,
      display_title,
      email,
      madhab,
      name,
      password,
      phone,
      pin_code,
      role,
      street_address,
      user_status,
    } = this.myform.value;

    let payload = {
      name,
      display_title,
      email,
      password,
      user_type: role.id,
      user_status: user_status.id,
      phone,
      madhab: madhab.id,
      address,
      street_address,
      pin_code,
    };

    if (this.mode === "edit") {
      this.userServices.updateUserItem(this.id, payload).subscribe((res) => {
        this.router.navigate(["/user-management"]).then((nav) => {
          this.myform.reset();
        });
      });
    } else {
      this.userServices.postUserItem(payload).subscribe((res) => {
        this.router.navigate(["/user-management"]).then((nav) => {
          this.myform.reset();
        });
      });
    }
  }
}
