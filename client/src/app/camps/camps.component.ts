import { Component, OnInit } from "@angular/core";
import { CampsService } from "../services/camps.service";

@Component({
  selector: "app-camps",
  templateUrl: "./camps.component.html",
  styleUrls: ["./camps.component.scss"]
})
export class CampsComponent implements OnInit {
  camps: Array<any>;
  constructor(private campsService: CampsService) {}

  ngOnInit() {
    this.campsService.getList().subscribe(camps => (this.camps = camps));
  }
  
}
