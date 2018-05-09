import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  username: string;
  password: string;
  birthdate: Date;
  error: string;
  constructor(private sessionService: SessionService, private router: Router) {}
  ngOnInit() {}

  signup() {
    const user = {username: this.username, password: this.password, birthdate: this.birthdate}
    this.sessionService.signup(user).subscribe((()=> this.router.navigate(['/login'])));
  }
}
