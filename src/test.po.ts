import { browser, element, by, ExpectedConditions, ElementFinder } from '../lib';

export class Page {
  nameInput: ElementFinder;
  button: ElementFinder;
  value: ElementFinder;
  value2: ElementFinder;

  init = () => {
    this.nameInput = element(by.id('yourname'));
    this.button = element(by.id('button'));
    this.value = element(by.id('yourname-value'));
    this.value2 = element(by.id('yourname-value2'));
  };

  get = (page: string) => {
    return browser.get(page);
  };

  setName = (name: string) => {
    return this.nameInput.sendKeys(name);
  };

  setClick = () => {
    return this.button.click();
  };

  getValueText = () => {
    return this.value.getText();
  };

  getValue2Text = async () => {
    await browser.wait(ExpectedConditions.visibilityOf(this.value2));
    return this.value2.getText();
  };
}
