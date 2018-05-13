import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../services/items.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-editItem",
  templateUrl: "./editItem.component.html",
  styleUrls: ["./editItem.component.scss"]
})
export class EditItemComponent implements OnInit {
  item: any;
  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.route.params.subscribe(params => {
      this.itemsService
        .get(params.itemId)
        .subscribe(item => (this.item = item));
    });
  }
  ngOnInit() {}

  saveItem() {
    this.itemsService.edit(this.item).subscribe(() => {
      this.route.params.subscribe(params => {
        this.router.navigate([`/shopDetail/${params.id}`]);
      });
    });
  }
}
