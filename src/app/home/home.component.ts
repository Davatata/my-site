import { Component, OnInit, style } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  words: string[] = ['code', 'build', 'create', 'innovate'];
  innerCurly: string[] = ['c','o','d','e'];
  wordOrder: number = 0;
  experienceItems: experienceItem[] = [
    { 
      icon: "fa-html5",
      color: "orange", 
      header: "HTML5", 
      text: "I use the newest version of HTML to keep up with the always evolving web standard so I can bring simple and clean pages to viewers."},
    { 
      icon: "fa-css3",
      color: "cornflowerblue", 
      header: "CSS3", 
      text: "I've created UI's using popular CSS frameworks such as Foundation and Bootstrap. I strive for a smooth and clean experience."},
    { 
      icon: "fa-code",
      color: "lightcoral", 
      header: "JavaScript", 
      text: "I'm creating pages using the newest versions of JavaScript. Coding all future pages with the Angular 4+ framework is a priority."}
  ];

  toolItems: toolItem[] = [
    { 
      image: "../../assets/angular.png",
      style: {"width":"120px", "height":"120px"},
      header: "Angular", 
      text: "Angular is one of the most popular front-end frameworks in the market at the moment. It's simple and effective in developing single page applications."},
    { 
      image: "../../assets/bootstrap.png",
      style: {"width":"120px", "height":"120px"},
      header: "Bootstrap", 
      text: "For styling purposes, Bootstrap is my choice since it is one of the most used framework for building responsive mobile-first sites."},
    { 
      image: "../../assets/typescript.png",
      style: {"width":"120px", "height":"120px", "padding": "15px"},
      header: "TypeScript", 
      text: "TypeScript is an improvement on the JavaScript language and is the language of choice for working in the Angular environment."}
  ];

  constructor() { }

  ngOnInit() {
    let wordChange = setInterval(() => {
        this.wordOrder = this.wordOrder + 1 >= this.words.length ? 0 : this.wordOrder + 1; // 1
        let word = this.words[this.wordOrder].split('');  // ['b','u','i','l','d']
        let cleared = false;
        let timer = setInterval(() => {
          if(this.innerCurly.length === 0 && !cleared) {
            cleared = true;
          } else if(cleared) {
            this.innerCurly.push(word.shift());
            if(word.length === 0) {
              cleared = false;
              clearInterval(timer);
            }
          } else {
            this.innerCurly.pop();
          }
        }, 100);
    }, 4000);
  }

}

interface experienceItem {
  icon:string, 
  color:string, 
  header:string, 
  text:string
}

interface toolItem {
  image:string,
  style:{}, 
  header:string, 
  text:string
}