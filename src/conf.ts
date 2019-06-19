import { Config, browser } from '../lib';

export let config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    '**/*.feature'
  ],
  
  onPrepare: function() {
    browser
      .manage()
      .window()
      .maximize();
    browser.waitForAngularEnabled(false);
  },

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {}
  },
  
  cucumberOpts: {
    require: [
      '**/*.steps.js'
    ],
    reporters: ['dot', 'spec', 'cucumber-snippet'],
    format: 'json:tmp/results/output_result.json'
  },
};
