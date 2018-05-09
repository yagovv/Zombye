import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-newShop',
  templateUrl: './newShop.component.html',
  styleUrls: ['./newShop.component.scss']
})
export class NewShopComponent implements OnInit {
  name: String;
  constructor(private sessionService: SessionService) { 
  }

  ngOnInit() {
  }
  createShop(){
    const shop = {
      name: this.name,
      owner: this.sessionService.user
    }
    //servicio creador de shops
  }
}
