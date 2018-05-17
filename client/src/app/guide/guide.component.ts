import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  tips: Array <String> = [
    "Stay silent",
    "Never Turn Your Back on the Enemy",
    "Always refactor",
    "Keep your code away from Marc",
    "Zombies Are the Least of Your Worries",
    "Choose Your Weapons Wisely",
    "Find your closest Camp",
    "Don't trust Victor Irix"
  ]
  constructor() { }

  ngOnInit() {
  }

}
