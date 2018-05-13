import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../services/shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  shops:Array<any>;

  constructor(private shopsService: ShopsService) { }

  ngOnInit() {
    this.shopsService.getList().subscribe(shops => this.shops = shops);
  }

}
