import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1.title')).getText();
  }

  getSubTitle() {
    return element(by.css('h2.subtitle')).getText();
  }

  getDescrip() {
    return element(by.css('h3.subtitle')).getText();
  }

}
