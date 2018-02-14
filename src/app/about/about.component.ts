import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutMe:string = `
    I'm an aspiring web developer that's currently learning Angular.
    I want to build front end applications that are responsive and user friendly.`;
  moreAboutMe:string = `
    I am inspired by science and technology. Space fascinates me to the point where
    I will stop and stare at the twinkling night sky. I marvel at the the stars and
    wonder how I can contribute to the cosmos and world.`;

  header = "Project Name";

  

  constructor() { }

  ngOnInit() {
  }

}
