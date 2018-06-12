import { agbPage } from './app.po';

describe('agb App', () => {
  let page: agbPage;

  beforeEach(() => {
    page = new agbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
