import { browser, element, by, By, $, $$, ExpectedConditions, ElementFinder } from '../lib';

export class Page {
  nameInput: ElementFinder;
  greeting: ElementFinder;
  button: ElementFinder;

  init = () => {
    this.nameInput = element(by.id('yourname'));
    this.button = element(by.id('button'));
    this.greeting = element(by.id('yourname-value'));
  };

  get = (page: string) => {
    return browser.get(page);
  };

  setName = (name: string) => {
    return this.nameInput.sendKeys(name);
  };

  setClick = () => {
    return this.button.click();
  }

  getGreetingText = () => {
    return this.greeting.getText();
  };
}
