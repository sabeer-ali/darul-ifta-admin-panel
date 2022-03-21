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

  errorMsg = { message: "" };

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
    let body = { email: userName, password: password };
    this.userService.getUserLoggin(body).subscribe((res) => {
      this.response = res;
      if (res.status) {
        localStorage.setItem("userAdminData", JSON.stringify(res));
        this.router.navigateByUrl("/dashboard");
      } else {
        this.errorMsg.message = res.message;
      }

      setTimeout(() => {
        this.errorMsg.message = "";
      }, 2000);
    });
  }

  changed() {
    console.log("Changed", this.form);
  }
}
