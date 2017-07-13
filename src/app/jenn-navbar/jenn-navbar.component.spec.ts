import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennNavbarComponent } from './jenn-navbar.component';

// Unit test for the navbar component
describe('JennNavbarComponent', () => {
  let component: JennNavbarComponent;
  let fixture: ComponentFixture<JennNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('The Component UI', () => {
    it(`should have title as 'Jenn Le'`, () => {
      expect(component.title).toEqual('Jenn Le');
    });

    xit('should render title in a navbar-brand', () => {

    });
  });
});
