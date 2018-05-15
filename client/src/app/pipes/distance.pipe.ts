import { Pipe, PipeTransform } from "@angular/core";
import { GeoLocationService } from "../services/geolocation.service";

@Pipe({
  name: "distance"
})
export class DistancePipe implements PipeTransform {
  constructor(public geoService: GeoLocationService) {}
  transform(p1, p2): any {
    return this.geoService.getDistance(p1, p2) + ' meters';
  }
}
