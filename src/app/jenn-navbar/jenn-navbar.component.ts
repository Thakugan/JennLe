import { Component, OnInit } from '@angular/core';

import { JennPage } from '../classes/jenn-page';

@Component({
  selector: 'app-jenn-navbar',
  templateUrl: './jenn-navbar.component.html',
  styleUrls: ['./jenn-navbar.component.scss']
})
export class JennNavbarComponent implements OnInit {
  title: String = 'Jenn Le';
  isExpanded: boolean;
  pages: JennPage[] = [
    {
      name: "about",
      link: "/about"
    },
    {
      name: "projects",
      link: "/projects"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
