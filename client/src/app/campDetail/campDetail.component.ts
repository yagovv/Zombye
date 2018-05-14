import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../services/shops.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { ItemsService } from '../services/items.service';
import { CampsService } from '../services/camps.service';

@Component({
  selector: 'app-campDetail',
  templateUrl: './campDetail.component.html',
  styleUrls: ['./campDetail.component.scss']
})
export class CampDetailComponent implements OnInit {
  camp;
  shops: Array<any>;
  constructor(
    private shopsService: ShopsService,
    private campsService: CampsService,
    route: ActivatedRoute,
    public router: Router,
    private sessionService: SessionService
  ) {
    route.params.subscribe(params => {
      campsService.get(params.id).subscribe(camp => {
        this.camp = camp;
        this.refreshShops();
      });
    });
  }
  ngOnInit() {}
  refreshShops() {
    this.shopsService
      .getCampShops(this.camp._id)
      .subscribe(shops => (this.shops = shops));
  }
}
