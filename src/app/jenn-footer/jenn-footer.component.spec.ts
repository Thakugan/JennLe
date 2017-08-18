import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennFooterComponent } from './jenn-footer.component';

describe('JennFooterComponent', () => {
  let component: JennFooterComponent;
  let fixture: ComponentFixture<JennFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
