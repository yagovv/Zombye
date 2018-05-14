import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";
import { environment } from '../../environments/environment';
import { createEmptyStateSnapshot } from "@angular/router/src/router_state";
import { SessionService } from './session.service';

@Injectable()
export class PurchasesService {
  BASE_URL: string = environment.BASEURL;
  options: any = { withCredentials:true };

  constructor(private http: Http, private sessionService: SessionService) {}
 
  buyItem(purchaseInfo) {
    return this.http
      .post(`${this.BASE_URL}/api/purchases/item`, purchaseInfo, this.options)
      .map(res => res.json());
  }

  buyLivingSpot(campId) {
    return this.http
      .put(`${this.BASE_URL}/api/purchases/camp`, campId, this.options)
      .map(res => res.json());
  }
}
