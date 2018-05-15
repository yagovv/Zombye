import { Component, OnInit } from "@angular/core";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: "app-chatDetail",
  templateUrl: "./chatDetail.component.html",
  styleUrls: ["./chatDetail.component.scss"]
})
export class ChatDetailComponent implements OnInit {
  constructor(private chatService: ChatService) {}

  ngOnInit() {}
}
