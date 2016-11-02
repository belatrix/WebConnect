import { BelatrixConnectPage } from './app.po';

describe('belatrix-connect App', function() {
  let page: BelatrixConnectPage;

  beforeEach(() => {
    page = new BelatrixConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
