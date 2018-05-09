import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  error: string;
  constructor(private sessionService: SessionService, private router: Router) {}
  ngOnInit() {}

  login() {
    const user = {username: this.username, password: this.password}
    this.sessionService.login(user).subscribe((()=> this.router.navigate(['/profile'])));
  }
}
