import { Component, OnInit } from "@angular/core";
import { ShopsService } from "../services/shops.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from "../services/session.service";
import { ItemsService } from "../services/items.service";
@Component({
  selector: "app-shopDetail",
  templateUrl: "./shopDetail.component.html",
  styleUrls: ["./shopDetail.component.scss"]
})
export class ShopDetailComponent implements OnInit {
  shop;
  items: Array<any>;
  constructor(
    private shopsService: ShopsService,
    route: ActivatedRoute,
    public router: Router,
    private sessionService: SessionService,
    private itemsService: ItemsService
  ) {
    route.params.subscribe(params => {
      shopsService.get(params.id).subscribe(shop => {
        this.shop = shop;
        this.refreshItems();
      });
    });
  }
  ngOnInit() {}
  refreshItems() {
    this.itemsService
      .getShopItems(this.shop._id)
      .subscribe(items => (this.items = items));
  }
}
