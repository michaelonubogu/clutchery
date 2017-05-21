import { ClutcheryPage } from './app.po';

describe('clutchery App', () => {
  let page: ClutcheryPage;

  beforeEach(() => {
    page = new ClutcheryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
