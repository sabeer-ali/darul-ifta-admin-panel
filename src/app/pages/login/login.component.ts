import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
// services
import { UserService } from "app/core/services/users/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  form: FormGroup;
  response: any;

  async handleLogin() {
    const { userName, password } = this.form.value;
    let params = `email=${userName}&&password=${password}`;
    this.userService.getUserList(params).subscribe((res) => {
      this.response = res;
      localStorage.setItem("userDetails", JSON.stringify(res[0]));
      if (res[0]) {
        this.router.navigate(["/dashboard"]);
      }

      setTimeout(() => {
        this.response = "";
      }, 2000);
    });
  }

  changed() {
    console.log("Changed", this.form);
  }
}
