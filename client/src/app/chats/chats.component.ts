import { Component, OnInit } from "@angular/core";
import { ChatService } from "../services/chat.service";
import { SessionService } from "../services/session.service";


@Component({
  selector: "app-chats",
  templateUrl: "./chats.component.html",
  styleUrls: ["./chats.component.scss"]
})
export class ChatsComponent implements OnInit {
  chatSearch = "";
  chats: any;

  constructor(
    private chatService: ChatService,
    private sessionService: SessionService
  ) {

  }

  ngOnInit() {

    this.sessionService.isLoggedIn().subscribe(() => {
      this.chatService.getChats().subscribe(chats => {
        console.log(chats);
        this.chats = chats;
      });
    });
  }
  searchUser() {}
}
