import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/session.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {

  constructor(private sessionService: SessionService) {}
  ngOnInit() {

  }
}
