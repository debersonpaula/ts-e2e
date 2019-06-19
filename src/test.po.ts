import { browser, element, by, By, $, $$, ExpectedConditions, ElementFinder } from '../lib';

export class Page {
  nameInput: ElementFinder;
  greeting: ElementFinder;

  init = () => {
    this.nameInput = element(by.model('yourName'));
    this.greeting = element(by.binding('yourName'));
  };

  get = (string: string) => {
    return browser.get(string);
  };

  setName = (name: string) => {
    return this.nameInput.sendKeys(name);
  };

  getGreetingText = () => {
    return this.greeting.getText();
  };
}
