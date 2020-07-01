import { CultoPage } from './app.po';

describe('culto App', function() {
  let page: CultoPage;

  beforeEach(() => {
    page = new CultoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
