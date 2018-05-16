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
import { EditItemComponent } from './editItem/editItem.component';
import { CampDetailComponent } from './campDetail/campDetail.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatDetailComponent } from './chatDetail/chatDetail.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginFormComponent },
  { path: "signup", component: SignupFormComponent },
  { path: "profile", component: ProfileComponent },
  { path: "map", component: MapComponent },
  { path: "shops", component: ShopsComponent },
  { path: "shopDetail/:id", component: ShopDetailComponent},
  { path: "shopDetail/:id/newItem", component: NewItemComponent},
  { path: "shopDetail/:id/editItem/:itemId", component: EditItemComponent},
  { path: "camps", component: CampsComponent },  
  { path: "campDetail/:id", component: CampDetailComponent },
  { path: "messages", component: MessagesComponent },  
  { path: "chats", component: ChatsComponent },
  { path: "chatDetail/:id", component: ChatDetailComponent },
  { path: "**", redirectTo: "" }
];

export const MyRouteRoutes = RouterModule.forChild(routes);