import { AngularInPracticePage } from './app.po';

describe('angular-in-practice App', () => {
  let page: AngularInPracticePage;

  beforeEach(() => {
    page = new AngularInPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
