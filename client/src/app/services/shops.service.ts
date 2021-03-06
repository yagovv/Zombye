import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";
import { environment } from '../../environments/environment';

@Injectable()
export class ShopsService {
  BASE_URL: string = environment.BASEURL;
  options: any = { withCredentials:true };

  constructor(private http: Http) {}
  getList() {
    return this.http.get(`${this.BASE_URL}/api/shops/list`, this.options).map(res => res.json());
  }
  getCampShops(campId){
    return this.http.get(`${this.BASE_URL}/api/shops/list/camp/${campId}`, this.options).map(res => res.json());
  }
  get(id) {
    return this.http
      .get(`${this.BASE_URL}/api/shops/${id}`)
      .map(res => res.json());
  }

  edit(shop) {
    return this.http
      .put(`${this.BASE_URL}/api/camps/${shop.id}`, shop)
      .map(res => res.json());
  }

  remove(id) {
    return this.http
      .delete(`${this.BASE_URL}/api/camps/${id}`)
      .map(res => res.json());
  }
}
