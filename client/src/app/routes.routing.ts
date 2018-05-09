import { Routes, RouterModule } from "@angular/router";
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginFormComponent },
  { path: "signup", component: SignupFormComponent },
  { path: "profile", component: ProfileComponent },
  { path: "**", redirectTo: "" }
];

export const MyRouteRoutes = RouterModule.forChild(routes);