import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennNavbarComponent } from './jenn-navbar.component';

// Unit test for the navbar component
describe('JennNavbarComponent', () => {
  let component: JennNavbarComponent;
  let fixture: ComponentFixture<JennNavbarComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennNavbarComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('The Component UI', () => {
    it(`should have title as 'Jenn Le'`, () => {
      expect(component.title).toEqual('Jenn Le');
    });

    it('should render title in a navbar-brand', () => {
      let nav_bar_title = compiled.querySelector('.navbar-brand')
                    .textContent;
      expect(nav_bar_title).toContain(component.title);
    });

    it('should render all the page links as nav-items', () => {
      let page_links = compiled.querySelectorAll('.nav-item');

      expect(page_links.length).toBe(component.pages.length);
      for(var i = 0; i < component.pages.length; i++) {
        expect(page_links[i].textContent).toContain(component.pages[i].name);
      }
    });
  });
});
