import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { JennNavbarComponent } from './jenn-navbar/jenn-navbar.component';
import { JennAboutComponent } from './jenn-about/jenn-about.component';
import { JennAboutMeComponent } from './jenn-about/jenn-about-me/jenn-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    JennNavbarComponent,
    JennAboutComponent,
    JennAboutMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
