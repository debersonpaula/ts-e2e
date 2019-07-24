import 'module-alias/register';
import { browser, by, element, ElementFinder, ExpectedConditions } from 'ts-e2e';

export class Page {
  public nameInput: ElementFinder;
  public button: ElementFinder;
  public value: ElementFinder;
  public value2: ElementFinder;

  public init = () => {
    this.nameInput = element(by.id('yourname'));
    this.button = element(by.id('button'));
    this.value = element(by.id('yourname-value'));
    this.value2 = element(by.id('yourname-value2'));
  }

  public get = (page: string) => {
    return browser.get(page);
  }

  public setName = (name: string) => {
    return this.nameInput.sendKeys(name);
  }

  public setClick = () => {
    return this.button.click();
  }

  public getValueText = () => {
    return this.value.getText();
  }

  public getValue2Text = async () => {
    await browser.wait(ExpectedConditions.visibilityOf(this.value2));
    return this.value2.getText();
  }
}
