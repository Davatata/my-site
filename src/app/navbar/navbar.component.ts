import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen = '';

  constructor() { }

  ngOnInit() {
  }

  toggleOpen() {
    this.isOpen = this.isOpen === '' ? 'in' : '';
  }

  closeDropdown() {
    if (this.isOpen === 'in') {
      this.isOpen = '';
    }
  }
}
