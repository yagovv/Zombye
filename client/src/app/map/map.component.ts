import { Component, OnInit, ViewChild } from "@angular/core";
import {} from "@types/googlemaps";
import { CampsService } from "../services/camps.service";
@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  camps: Array<any>;
  constructor(private campsService: CampsService) {}
  ngOnInit() {
    this.campsService.getList().subscribe(camps => (this.camps = camps));
  }
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
