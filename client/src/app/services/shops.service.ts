import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";
import { environment } from '../../environments/environment';

@Injectable()
export class ShopsService {
  BASE_URL: string = environment.BASEURL;

  constructor(private http: Http) {}
  getList(id) {
    return this.http.get(`${this.BASE_URL}/api/shops/${id}`).map(res => res.json());
  }

  get(id) {
    return this.http
      .get(`${this.BASE_URL}/api/camps/${id}`)
      .map(res => res.json());
  }

  edit(dish) {
    return this.http
      .put(`${this.BASE_URL}/api/camps/${dish.id}`, dish)
      .map(res => res.json());
  }

  remove(id) {
    return this.http
      .delete(`${this.BASE_URL}/api/camps/${id}`)
      .map(res => res.json());
  }
}
