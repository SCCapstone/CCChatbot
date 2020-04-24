import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to ACME Cable Company Support');
  });

  it('should display sub-title', () => {
    page.navigateTo();
    expect(page.getSubTitle()).toEqual('Test out our chatbot or login to download!');
  });

  it('should display description', () => {
    page.navigateTo();
    expect(page.getDescrip()).toEqual('The ACME Chatbot is designed to solve the most common issues with internet and cable TV. At your convenience, you can schedule an appointment with the chatbot.');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
