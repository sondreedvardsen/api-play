import { ApiPlayPage } from './app.po';

describe('api-play App', function() {
  let page: ApiPlayPage;

  beforeEach(() => {
    page = new ApiPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
