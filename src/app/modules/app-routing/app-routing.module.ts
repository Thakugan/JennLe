import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { JennAboutComponent } from '../../jenn-about/jenn-about.component';
import { JennProjectsComponent } from '../../jenn-projects/jenn-projects.component';
import { JennMiscComponent } from '../../jenn-misc/jenn-misc.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: JennAboutComponent },
  { path: 'projects', component: JennProjectsComponent },
  { path: 'misc', component: JennMiscComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
