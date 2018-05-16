import { Pipe, PipeTransform } from "@angular/core";
import { SessionService } from '../services/session.service';

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  user: any;
  constructor(private sessionService: SessionService){
    this.user = this.sessionService.handleUser();
  }
  transform(
    chatList: Array<any>,
    field: any,
    search: string
  ): Array<Object> {
    if (!chatList) {
      return [];
    }
    if (!search) {
      return chatList;
    }
    let filterSearch = new RegExp(search, "i");
    return chatList.filter(chat => {
      if(chat.users[0]._id==field._id){
        return chat.users[1].username.match(filterSearch);
      }else{
        return chat.users[0].username.match(filterSearch);
      }
      
    });
  }
}
