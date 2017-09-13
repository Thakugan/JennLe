import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennMiscComponent } from './jenn-misc.component';

describe('JennMiscComponent', () => {
  let component: JennMiscComponent;
  let fixture: ComponentFixture<JennMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
