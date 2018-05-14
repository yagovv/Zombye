import { Component, OnInit } from "@angular/core";
import { MessagesService } from "../services/messages.service";
import { SessionService } from '../services/session.service';

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  messages: Array<any>;
  constructor(private messagesService: MessagesService, private sessionService: SessionService) {
    this.messagesService
      .getMessages()
      .subscribe(messages => (this.messages = messages));
  }

  ngOnInit() {}
}
