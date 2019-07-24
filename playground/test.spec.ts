import { After, Before, Given, Then, When } from 'cucumber';
import { Page } from './test.po';
import { attachScreenshots } from './utils.helper';

import * as chai from 'chai';
const expect = chai.expect;

const specPage = new Page();

After(attachScreenshots);

Before(() => {
  specPage.init();
});

Given('que estou na tela {string}', async (param: string) => {
  await specPage.get(param);
});

When('um usuário digita {string}', async (param: string) => {
  await specPage.setName(param);
});

When('o botão é clicado', async () => {
  await specPage.setClick();
});

Then('a página principal deve ser apresentada com o nome {string}', async (param: string) => {
  const value = await specPage.getValueText();
  const value2 = await specPage.getValue2Text();
  expect(value).to.equal(`Seu nome é ${param}`);
  expect(value2).to.equal(`Dinamicamente seu nome é ${param}`);
});
