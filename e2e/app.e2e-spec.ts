import { JennLeAngularVersionPage } from './app.po';

describe('jenn-le-angular-version App', () => {
  let page: JennLeAngularVersionPage;

  beforeEach(() => {
    page = new JennLeAngularVersionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
  });
});
