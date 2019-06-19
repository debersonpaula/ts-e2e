import { Given, When, Then, Before, After } from 'cucumber';
import { Page } from './test.po';
import { attachScreenshots } from './utils.helper';

import * as chai from 'chai';
const expect = chai.expect;

let specPage = new Page();

After(attachScreenshots);

Before(function() {
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
  const greetingText = await specPage.getGreetingText();
  expect(greetingText).to.equal(`Seu nome é x ${param}`);
});
