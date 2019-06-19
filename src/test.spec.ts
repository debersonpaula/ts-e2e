import { Given, When, Then, Before } from 'cucumber';
import { Page } from './test.po';

let specPage = new Page();

Before(function() {
  specPage.init();
});

Given('The user go to {string}', function(string) {
  specPage.get(string);
});

When('The user adds {string} in the name field', function(string) {
  specPage.setName(string);
});

Then('The user should see Hello with the username', function() {
  expect(specPage.getGreetingText()).toEqual('Hello Julie!');
});
