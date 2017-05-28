import { CharSheetAngular2Page } from './app.po';

describe('char-sheet-angular2 App', () => {
  let page: CharSheetAngular2Page;

  beforeEach(() => {
    page = new CharSheetAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
