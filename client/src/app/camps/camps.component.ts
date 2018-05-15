import { Component, OnInit } from "@angular/core";
import { CampsService } from "../services/camps.service";
import { GeoLocationService } from "../services/geolocation.service";

@Component({
  selector: "app-camps",
  templateUrl: "./camps.component.html",
  styleUrls: ["./camps.component.scss"]
})
export class CampsComponent implements OnInit {
  camps: Array<any>;
  location: any;

  constructor(
    private campsService: CampsService,
    public geolocation: GeoLocationService
  ) {}

  ngOnInit() {
    this.campsService.getList().subscribe(camps => (this.camps = camps));
    this.geolocation.getLocation().subscribe(location => {
      console.log(location);
      this.location = [location.coords.latitude, location.coords.longitude];
      console.log(this.location);
    });
  }
}
