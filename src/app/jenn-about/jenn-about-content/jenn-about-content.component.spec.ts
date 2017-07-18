import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennAboutContentComponent } from './jenn-about-content.component';

describe('JennAboutContentComponent', () => {
  let component: JennAboutContentComponent;
  let fixture: ComponentFixture<JennAboutContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennAboutContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennAboutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
