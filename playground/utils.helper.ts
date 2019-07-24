import { Status } from 'cucumber';
import * as fs from 'fs';
import * as path from 'path';
import { browser } from 'ts-e2e';

const baseRootDir = path.resolve(__dirname, '../../results/html/screenshots');

/**
 * abstract writing screen shot to a file
 */
export function writeScreenShot(data, filename) {
  const stream = fs.createWriteStream(path.join(baseRootDir, filename));
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

/**
 * attach screenshots for every test
 */
export async function attachScreenshots(scenario) {
  const world = this;
  if (scenario.result.status === Status.FAILED) {
    return await browser.takeScreenshot().then((buffer: any) => {
      return world.attach(buffer, 'image/png');
    });
  }
  return await browser.takeScreenshot().then((buffer: any) => {
    return world.attach(buffer, 'image/png');
  });
}
