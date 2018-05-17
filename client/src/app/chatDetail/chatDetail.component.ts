import { Component, OnInit } from "@angular/core";
import { ChatService } from "../services/chat.service";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { SessionService } from '../services/session.service';

@Component({
  selector: "app-chatDetail",
  templateUrl: "./chatDetail.component.html",
  styleUrls: ["./chatDetail.component.scss"]
})
export class ChatDetailComponent implements OnInit {
  chat: any;
  message: any;
  user: any;
  constructor(
    public chatService: ChatService,
    public route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService
  ) {
    this.route.params.subscribe(params => {
      this.chatService.getChat(params.id).subscribe(chat => {
        this.chat = chat;
        this.chatService.connect(this.chat._id, this.chat.history);
        this.user = this.sessionService.user;
      });
    });
  }

  ngOnInit() {}

  clickSend(){
    this.chatService.sendMessage(`${this.user.username}: ${this.message}`);
    this.message = '';
  }
}
