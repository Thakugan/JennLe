import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jenn-navbar',
  templateUrl: './jenn-navbar.component.html',
  styleUrls: ['./jenn-navbar.component.scss']
})
export class JennNavbarComponent implements OnInit {
  title: String = 'Jenn Le';

  constructor() { }

  ngOnInit() {
  }

}
