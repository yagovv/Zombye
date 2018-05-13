import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class ItemsService {
  BASE_URL: string = environment.BASEURL;
  options: any = { withCredentials: true };

  constructor(private http: Http) {}
  get(id) {
    return this.http
      .get(`${this.BASE_URL}/api/items/${id}`)
      .map(res => res.json());
  }
  getShopItems(shopId) {
    return this.http
      .get(`${this.BASE_URL}/api/items/shop/${shopId}`)
      .map(res => res.json());
  }
  create(item){
    return this.http
      .post(`${this.BASE_URL}/api/items`, item)
      .map(res => res.json());
  }
  edit(item) {
    return this.http
      .put(`${this.BASE_URL}/api/items/${item._id}`, item)
      .map(res => res.json());
  }

  remove(id) {
    return this.http
      .delete(`${this.BASE_URL}/api/items/${id}`)
      .map(res => res.json());
  }
}
