import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../services/session.service";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-zombie",
  templateUrl: "./zombie.component.html",
  styleUrls: ["./zombie.component.scss"]
})
export class ZombieComponent implements OnInit {
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private http: Http
  ) {}

  ngOnInit() {}
  okey() {
    this.sessionService.isLoggedIn().subscribe(() => {
      console.log(environment.BASEURL);
      console.log(this.sessionService.user);
      this.http.get(
          `${environment.BASEURL}/api/auth/zombieAlertOff/${this.sessionService.user._id}`
        ).subscribe();
      this.router.navigate(["/profile"]);
    });
  }
}
