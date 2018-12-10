import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  invalid = true;
  submitted: Boolean;
  contact = {
    name: '',
    email: '',
    message: ''
  };

  // regex grabbed from => https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
  emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  constructor(private httpService: HttpService) {
    this.submitted = this.httpService.submitted;
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    this.httpService.addMessage(f.value);
  }


}
