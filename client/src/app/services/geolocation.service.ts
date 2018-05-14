import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

const GEOLOCATION_ERRORS = {
  "errors.location.unsupportedBrowser":
    "Browser does not support location services",
  "errors.location.permissionDenied":
    "You have rejected access to your location",
  "errors.location.positionUnavailable": "Unable to determine your location",
  "errors.location.timeout": "Service timeout has been reached"
};

@Injectable()
export class GeoLocationService {
  rad(x: any): any {
    return x * Math.PI / 180;
  }

  getDistance(p1: [number], p2: [number]): number {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = this.rad(p2[1] - p1[1]);
    var dLong = this.rad(p2[0] - p1[0]);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1[1])) *
        Math.cos(this.rad(p2[1])) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.floor(d); // returns the distance in meter
  }

  getLocation(geoLocationOptions?: any): Observable<any> {
    geoLocationOptions = geoLocationOptions || { timeout: 5000 };
    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          position => {
            observer.next(position);
            observer.complete();
          },
          error => {
            switch (error.code) {
              case 1:
                observer.error(
                  GEOLOCATION_ERRORS["errors.location.permissionDenied"]
                );
                break;
              case 2:
                observer.error(
                  GEOLOCATION_ERRORS["errors.location.positionUnavailable"]
                );
                break;
              case 3:
                observer.error(GEOLOCATION_ERRORS["errors.location.timeout"]);
                break;
            }
          },
          geoLocationOptions
        );
      } else {
        observer.error(
          GEOLOCATION_ERRORS["errors.location.unsupportedBrowser"]
        );
      }
    });
  }
}

export let geolocationServiceInjectables: Array<any> = [
  { provide: GeoLocationService, useClass: GeoLocationService }
];
