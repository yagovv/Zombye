import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  userSearch = "";
  users:any;
  constructor() { }
  
  ngOnInit() {
  }
  searchUser(){

  }
}
