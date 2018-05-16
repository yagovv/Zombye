import { Component, OnInit } from "@angular/core";
import { ChatService } from "../services/chat.service";
import { Route, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-chatDetail",
  templateUrl: "./chatDetail.component.html",
  styleUrls: ["./chatDetail.component.scss"]
})
export class ChatDetailComponent implements OnInit {
  chat: any;
  constructor(
    private chatService: ChatService,
    public route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.chatService.getChat(params.id).subscribe(chat => (this.chat = chat));
    });
  }

  ngOnInit() {}
}
