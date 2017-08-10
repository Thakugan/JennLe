import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennAboutWorkComponent } from './jenn-about-work.component';

describe('JennAboutWorkComponent', () => {
  let component: JennAboutWorkComponent;
  let fixture: ComponentFixture<JennAboutWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennAboutWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennAboutWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
