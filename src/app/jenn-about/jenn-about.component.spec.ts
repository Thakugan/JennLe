import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennAboutComponent } from './jenn-about.component';

describe('JennAboutComponent', () => {
  let component: JennAboutComponent;
  let fixture: ComponentFixture<JennAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennAboutComponent ]
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
