import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes.routing';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from "./services/session.service";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AgePipe } from './pipes/age.pipe';
import { NewShopComponent } from './newShop/newShop.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CampsComponent } from './camps/camps.component';
import { AgmCoreModule } from '@agm/core';
import { CampsService } from './services/camps.service';
import { MapComponent } from './map/map.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopsService } from './services/shops.service';
import { ShopDetailComponent } from './shopDetail/shopDetail.component';
import { NewItemComponent } from './newItem/newItem.component';
import { ItemsService } from './services/items.service';
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
    NewItemComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkHh-A_S8smtGLN-OBxspNSz0ogAsDdv4'
    })
  ],
  providers: [SessionService, CampsService, ShopsService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }