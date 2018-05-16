import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import * as _ from 'underscore';
import { environment } from '../../environments/environment';
import { Http, HttpModule } from '@angular/http';
import "rxjs";

@Injectable()
export class ChatService {
  BASE_URL: string = environment.BASEURL;
  options: any = { withCredentials:true };
  socket:any;
  messages:Array<any> = new Array();
  constructor(private http: Http){
    // console.log("Constructed Service");
    // this.socket = io(this.BASE_URL);
    // this.socket.on('chatmessage', this.receiveMessageFromServer.bind(this));
  }
  populateMessages(messages){
    this.messages = messages;
  }
  sendMessage(message) {
    this.messages.unshift(message);
    this.socket.emit('sendmessage', message);
  }

  updateRoom(message) {
    this.messages.unshift(message);
    this.socket.emit('sendtoroom', message);
  }

  joinRoom(meetupId) {
    this.socket.emit('addtoroom', meetupId);
  }

  connect(id, messages) {
    // this.messages = _.sortBy(messages, 'created_at').reverse();
    // if (!this.socket) {
    //   this.socket = io(this.url, { query: `id=${id}`});

    //   this.socket.on('newmessage', (msg) => {
    //       this.messages.unshift(msg);
    //       this.messageAdded.next(true);
    //   });

    //   this.socket.on('updateroom', (message) => {
    //       message['new'] = true;
    //       this.messages.unshift(message);
    //       this.messageAdded.next(true);
    //   });
    // } else {
    //   this.socket.connect();
    // }
  }

  disconnect() {
    if (this.socket) {
      this.messages = [];
      this.socket.io.disconnect();
    }
  }
  getChats(){
    return this.http.get(`${this.BASE_URL}/api/chats/list`, this.options).map(res => res.json());
  }
  getChat(id){
    return this.http.get(`${this.BASE_URL}/api/chats/${id}`, this.options).map(res => res.json());
  }
}