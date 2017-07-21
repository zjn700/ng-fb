import { NgFbGitPage } from './app.po';

describe('ng-fb-git App', () => {
  let page: NgFbGitPage;

  beforeEach(() => {
    page = new NgFbGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
