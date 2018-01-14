import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutMe:string = `
    I'm an aspiring web developer that's currently learning Angular 4.
    I want to build single page applications that are reactive and intuitive.`;

  constructor() { }

  ngOnInit() {
  }

}
