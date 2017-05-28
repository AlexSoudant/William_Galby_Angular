import { PRJSTARWARSPage } from './app.po';

describe('prj-star-wars App', () => {
  let page: PRJSTARWARSPage;

  beforeEach(() => {
    page = new PRJSTARWARSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
