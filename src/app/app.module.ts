import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { JennNavbarComponent } from './jenn-navbar/jenn-navbar.component';
import { JennAboutComponent } from './jenn-about/jenn-about.component';
import { JennAboutContentComponent } from './jenn-about/jenn-about-content/jenn-about-content.component';

@NgModule({
  declarations: [
    AppComponent,
    JennNavbarComponent,
    JennAboutComponent,
    JennAboutContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
