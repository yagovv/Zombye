import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";
import { environment } from '../../environments/environment';
import { createEmptyStateSnapshot } from "@angular/router/src/router_state";

@Injectable()
export class MessagesService {
  BASE_URL: string = environment.BASEURL;
  options: any = { withCredentials:true };

  constructor(private http: Http) {}
 
  getMessages() {
    return this.http
      .get(`${this.BASE_URL}/api/messages/list`, this.options)
      .map(res => res.json());
  }

  buyLivingSpot(campId) {
    return this.http
      .put(`${this.BASE_URL}/api/purchases/camp`, campId, this.options)
      .map(res => res.json());
  }
}
