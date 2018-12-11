import { Component, OnInit, style } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  words: string[] = ['code', 'build', 'create', 'innovate'];
  // innerCurly: string[] = ['c','o','d','e'];
  innerCurly = 'create';
  wordOrder = 0;
  experienceItems: ExperienceItem[] = [
    {
      icon: 'fa-book',
      color: 'orange',
      header: 'Learning',
      text: `I am constantly learning and searching for new ways to solve programming problems.
      I put this site together using what I\'ve learned with Angular`},
    {
      icon: 'fa-diamond',
      color: 'cornflowerblue',
      header: 'Improving',
      text: `I try to improve my skills as well as aquire new ones. I strive to hone my abilities
      to continually make better and cleaner websites.`},
    {
      icon: 'fa-wrench',
      color: 'lightcoral',
      header: 'Building',
      text: `I feel the best way to improve a skill is to apply it. I build and create web
      pages not just for the joy of it, but to better myself and my craft.`}
  ];

  toolItems: ToolItem[] = [
    {
      image: '../../assets/angular.png',
      style: {'width': '120px', 'height': '120px'},
      header: 'Angular',
      text: `Angular is one of the most popular front-end frameworks in the market at the moment. It\'s
      complex but effective in developing single page applications.`},
      {
        image: '../../assets/typescript.png',
        style: {'width': '120px', 'height': '120px', 'padding': '15px'},
        header: 'TypeScript',
        text: `TypeScript is a superset of JavaScript and is essential for building Angular
        applications. Although I enjoy JavaScript, TypeScript allows for cleaner and more
        understandable code.`},
      {
        image: '../../assets/firebase.png',
        style: {'width': '120px', 'height': '120px'},
        header: 'Firebase',
        text: `For hosting my sites and storing data, my go to choice is Google\'s Firebase.
        It\'s great for getting a project up and running in a short amount of time.`},
  ];

  dynamicWords = {
    'background-color': 'transparent'
  };

  constructor() { }

  ngOnInit() {
    // let wordChange = setInterval(() => {
    //     this.wordOrder = this.wordOrder + 1 >= this.words.length ? 0 : this.wordOrder + 1; // 1
    //     let word = this.words[this.wordOrder].split('');  // ['b','u','i','l','d']
    //     let cleared = false;
    //     let timer = setInterval(() => {
    //       if(this.innerCurly.length === 0 && !cleared) {
    //         cleared = true;
    //       } else if(cleared) {
    //         this.innerCurly.push(word.shift());
    //         if(word.length === 0) {
    //           cleared = false;
    //           clearInterval(timer);
    //         }
    //       } else {
    //         this.innerCurly.pop();
    //       }
    //     }, 100);
    // }, 4000);
    // let wordHighlight = setInterval(() => {
    //   this.wordOrder = this.wordOrder + 1 >= this.words.length ? 0 : this.wordOrder + 1; // 1
    //   let word = this.words[this.wordOrder];  // 'build'
    //     this.innerCurly = this.words[this.wordOrder];
    // }, 4000);
  }

}

interface ExperienceItem {
  icon: string;
  color: string;
  header: string;
  text: string;
}

interface ToolItem {
  image: string;
  style: {};
  header: string;
  text: string;
}
