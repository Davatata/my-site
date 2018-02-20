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

  projects:any[] = [
    {
      image: '',
      title: 'Netflux',
      body: 'Netflux is a project I made because I constantly wondered what movies/shows are coming to Netflix soon. It also displays what\'s leaving soon so I could watch my favorite shows before it\'s too late.',
      link: 'https://rawgit.com/Davatata/netflux/master/index.html#',
      colors: '#ea5454'
    },
    {
      image: '',
      title: 'Mine Finder',
      body: 'What began as a small school project grew into a game I find myself playing every so often. Originally it was just a Minesweeper copy but I later added additional features like a solver.',
      link: 'https://rawgit.com/Davatata/Mine-Finder/master/Mine_finder.html',
      colors: 'lightgray'
    },
    {
      image: '',
      title: 'Belot Score Tracker',
      body: 'This app allows users who play 32-card Bridge (Belot) to keep track of their game score. ',
      link: 'http://davatata.github.io/Belot-Score-Tracker/',
      colors: 'seagreen'
    }
  ];

  

  constructor() { }

  ngOnInit() {
  }

}
