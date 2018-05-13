import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";
import { environment } from '../../environments/environment';
import { createEmptyStateSnapshot } from "@angular/router/src/router_state";

@Injectable()
export class CampsService {
  BASE_URL: string = environment.BASEURL;

  constructor(private http: Http) {}
  getList() {
    return this.http.get(`${this.BASE_URL}/api/camps/list`).map(res => res.json());
  }
  getClosests(params) {
    return this.http.get(`${this.BASE_URL}/api/camps/closests`, params).map(res => res.json());
  }

  get(id) {
    return this.http
      .get(`${this.BASE_URL}/api/camps/${id}`)
      .map(res => res.json());
  }

  edit(camp) {
    return this.http
      .put(`${this.BASE_URL}/api/camps/${camp.id}`, camp)
      .map(res => res.json());
  }

  remove(id) {
    return this.http
      .delete(`${this.BASE_URL}/api/camps/${id}`)
      .map(res => res.json());
  }
}
