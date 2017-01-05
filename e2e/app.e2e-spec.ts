import { SmallTownAppPage } from './app.po';

describe('small-town-app App', function() {
  let page: SmallTownAppPage;

  beforeEach(() => {
    page = new SmallTownAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
