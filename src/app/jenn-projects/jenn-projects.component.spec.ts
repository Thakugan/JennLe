import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennProjectsComponent } from './jenn-projects.component';

describe('JennProjectsComponent', () => {
  let component: JennProjectsComponent;
  let fixture: ComponentFixture<JennProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
