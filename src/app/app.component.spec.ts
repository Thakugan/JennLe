import { TestBed, async } from '@angular/core/testing';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { JennNavbarComponent } from './jenn-navbar/jenn-navbar.component'
import { JennAboutComponent } from './jenn-about/jenn-about.component';
import { JennAboutMeComponent } from './jenn-about/jenn-about-me/jenn-about-me.component';
import { JennProjectsComponent } from './jenn-projects/jenn-projects.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MDBBootstrapModule.forRoot() ],
      declarations: [
        AppComponent,
        JennNavbarComponent,
        JennAboutComponent,
        JennAboutMeComponent,
        JennProjectsComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
