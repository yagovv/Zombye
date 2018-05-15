import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../services/items.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-newItem",
  templateUrl: "./newItem.component.html",
  styleUrls: ["./newItem.component.scss"]
})
export class NewItemComponent implements OnInit {
  name: String;
  info: String;
  price: Number;
  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {}
  createItem() {
    let item:any = {
      name: this.name,
      info: this.info,
      price: this.price
    };
    this.route.params.subscribe(params => {
      item.shop = params.id;
      this.itemsService.create(item).subscribe((()=>{
        this.router.navigate([`/shopDetail/${params.id}`]);
      }));
      
    });
  }
}
