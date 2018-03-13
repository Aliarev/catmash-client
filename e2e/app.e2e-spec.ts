import { CatmashClientPage } from './app.po';

describe('catmash-client App', () => {
  let page: CatmashClientPage;

  beforeEach(() => {
    page = new CatmashClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
