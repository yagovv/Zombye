import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/session.service";
import { environment } from "../../environments/environment";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  image: String;
  user: any = {};
  constructor(private sessionService: SessionService) {
    this.sessionService.userEvent.subscribe(user => {
      if (user) {
        this.image = `${environment.BASEURL}/${this.sessionService.user.image}`;
      }
    });
  }
  ngOnInit() {
    this.sessionService.isLoggedIn().subscribe(user => {
      this.user = user;
    })
  }
}
