import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennAboutMeComponent } from './jenn-about-me.component';

describe('JennAboutMeComponent', () => {
  let component: JennAboutMeComponent;
  let fixture: ComponentFixture<JennAboutMeComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennAboutMeComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
