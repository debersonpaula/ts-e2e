import { browser } from '../lib';
import * as fs from 'fs';
import * as path from 'path';
import { Status } from 'cucumber';
// const fs = require('fs');
// const path = require('path');
// const { Status } = require('cucumber');

const baseRootDir = path.resolve(__dirname, '../../results/html/screenshots');

/**
 * abstract writing screen shot to a file
 */
export function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(path.join(baseRootDir, filename));
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

/**
 * Adiciona screenshots a cada teste realizado
 * @param {*} scenario
 */
export async function attachScreenshots(scenario) {
  let world = this;
  if (scenario.result.status === Status.FAILED) {
    return await browser.takeScreenshot().then(function(buffer) {
      return world.attach(buffer, 'image/png');
    });
  }
  return await browser.takeScreenshot().then(function(buffer) {
    return world.attach(buffer, 'image/png');
  });
}
