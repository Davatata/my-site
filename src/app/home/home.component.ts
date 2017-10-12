import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  words = ['code', 'build', 'create', 'innovate'];
  innerCurly:string[] = ['c','o','d','e'];
  wordOrder = 0;

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
