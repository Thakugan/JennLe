import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennAboutComponent } from './jenn-about.component';
import { JennAboutMeComponent } from './jenn-about-me/jenn-about-me.component';
import { JennAboutWorkComponent } from './jenn-about-work/jenn-about-work.component';

describe('JennAboutComponent', () => {
  let component: JennAboutComponent;
  let fixture: ComponentFixture<JennAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JennAboutComponent ,
        JennAboutMeComponent,
        JennAboutWorkComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
