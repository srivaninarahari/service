import { Service2Page } from './app.po';

describe('service2 App', () => {
  let page: Service2Page;

  beforeEach(() => {
    page = new Service2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
