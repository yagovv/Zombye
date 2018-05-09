import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-newShop',
  templateUrl: './newShop.component.html',
  styleUrls: ['./newShop.component.scss']
})
export class NewShopComponent implements OnInit {
  name: String;
  owner: any;
  constructor(private sessionService: SessionService) { 
    this.owner = sessionService.user;
  }

  ngOnInit() {
  }
  createShop(){
    const shop = {
      name: this.name,
      owner: this.owner
    }
    //servicio creador de shops
  }
}
