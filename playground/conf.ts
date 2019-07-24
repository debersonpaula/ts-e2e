import 'module-alias/register';
import { browser, Config } from 'ts-e2e';

export let config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['**/*.feature'],

  onPrepare() {
    browser
      .manage()
      .window()
      .maximize();
    browser.waitForAngularEnabled(false);
  },

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {},
  },

  cucumberOpts: {
    format: 'json:tmp/results/output_result.json',
    reporters: ['dot', 'spec', 'cucumber-snippet'],
    require: ['**/*.steps.js'],
  },
};
