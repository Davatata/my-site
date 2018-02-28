import { Injectable } from '@angular/core';

// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class HttpService {
  submitted: Boolean;
  // messages: AngularFireList<messageItem>;

  constructor(
    // private db: AngularFireDatabase
  ) {
    // this.messages = db.list('/messages');
    // this.submitted = Boolean(localStorage.getItem('submitted'));
  }

  addMessage(message:messageItem): void {
    // console.log(this.submitted);
    // if (!this.submitted) {
    //   localStorage.setItem('submitted', 'true');
    //   this.messages.push(message);
    // }
  } 
}

interface messageItem {
  name: string,
  email: string,
  message: string
}
