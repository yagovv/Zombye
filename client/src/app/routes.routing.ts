import { Routes, RouterModule } from "@angular/router";
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CampsComponent } from './camps/camps.component';
import { MapComponent } from './map/map.component';
import { ShopsComponent } from "./shops/shops.component";
import { ShopDetailComponent } from './shopDetail/shopDetail.component';
import { NewItemComponent } from "./newItem/newItem.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginFormComponent },
  { path: "signup", component: SignupFormComponent },
  { path: "profile", component: ProfileComponent },
  { path: "map", component: MapComponent },
  { path: "shops", component: ShopsComponent },
  { path: "shopDetail/:id", component: ShopDetailComponent},
  { path: "shopDetail/:id/newItem", component: NewItemComponent},
  { path: "camps", component: CampsComponent },  
  { path: "**", redirectTo: "" }
];

export const MyRouteRoutes = RouterModule.forChild(routes);