import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/session.service";
import { Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";
import { environment } from "../../environments/environment";
const BASEURL = environment.BASEURL;
@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.scss"]
})
export class SignupFormComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${BASEURL}/api/auth/signup`,
    method: 'POST'
  });
  feedback: string;
  username: string;
  password: string;
  birthdate: Date;
  error: string;
  image: any;
  constructor(private sessionService: SessionService, private router: Router) {}
  ngOnInit() {}

  signup() {
    const user = {
      username: this.username,
      password: this.password,
      birthdate: this.birthdate
    };
    // this.sessionService
    //   .signup(user)
    //   .subscribe(() =>
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', this.username);
      form.append('password', this.password);
      form.append('birthdate', this.birthdate);
    };
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = () => {
      this.router.navigate(["/login"]);
    };
  }
}
