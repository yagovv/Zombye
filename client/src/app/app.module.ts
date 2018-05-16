import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Http, HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";

import { AppComponent } from "./app.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { ShopsComponent } from "./shops/shops.component";
import { MapComponent } from "./map/map.component";
import { NewShopComponent } from "./newShop/newShop.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { CampsComponent } from "./camps/camps.component";
import { ShopDetailComponent } from "./shopDetail/shopDetail.component";
import { NewItemComponent } from "./newItem/newItem.component";
import { EditItemComponent } from "./editItem/editItem.component";
import { CampDetailComponent } from "./campDetail/campDetail.component";
import { ChatsComponent } from './chats/chats.component';
import { MessagesComponent } from './messages/messages.component';

import { SessionService } from "./services/session.service";
import { GeoLocationService } from "./services/geolocation.service";
import { CampsService } from "./services/camps.service";
import { ShopsService } from "./services/shops.service";
import { ItemsService } from "./services/items.service";
import { UsersService } from "./services/users.service";
import { PurchasesService } from "./services/purchases.service";
import { MessagesService } from "./services/messages.service";
import { ChatService } from './services/chat.service';

import { AgePipe } from "./pipes/age.pipe";
import { DistancePipe } from './pipes/distance.pipe';  
import { FilterPipe } from './pipes/filter.pipe';

import { routes } from "./routes.routing";
import { ChatDetailComponent } from './chatDetail/chatDetail.component';

import { FileSelectDirective } from "ng2-file-upload";


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    ProfileComponent,
    SignupFormComponent,
    AgePipe,
    NewShopComponent,
    NavbarComponent,
    CampsComponent,
    MapComponent,
    ShopsComponent,
    ShopDetailComponent,
    NewItemComponent,
    EditItemComponent,
    CampDetailComponent,
    MessagesComponent,
    ChatsComponent,
    ChatDetailComponent,
    DistancePipe,
    FilterPipe,
    ChatDetailComponent,
    FileSelectDirective
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDkHh-A_S8smtGLN-OBxspNSz0ogAsDdv4"
    })
  ],
  providers: [
    SessionService,
    CampsService,
    ShopsService,
    ItemsService,
    GeoLocationService,
    PurchasesService,
    MessagesService,
    ChatService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
