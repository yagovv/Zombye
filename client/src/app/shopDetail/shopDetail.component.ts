import { Component, OnInit } from "@angular/core";
import { ShopsService } from "../services/shops.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from '../services/session.service';
@Component({
  selector: "app-shopDetail",
  templateUrl: "./shopDetail.component.html",
  styleUrls: ["./shopDetail.component.scss"]
})
export class ShopDetailComponent implements OnInit {
  shop;
  constructor(
    private shopsService: ShopsService,
    route: ActivatedRoute,
    public router: Router,
    private sessionService: SessionService
  ) {
    route.params.subscribe(params => {
      shopsService.get(params.id).subscribe(shop => {
        this.shop = shop;
      });
    });
  }

  ngOnInit() {}
}
