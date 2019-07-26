const fs = require('fs');
const path = require('path');
const copyFiles = require('./helpers/copyFiles');
const createDir = require('./helpers/createDir');

copyFilesBeforeDeploy();

async function copyFilesBeforeDeploy() {
  try {
    createDir('./deploy');
    await copyFiles(['./src/**/*.js', './deploy']);
    await copyFiles(['./tmp/**/*', './deploy']);
    copyRoot('tsconfig.json');
    copyRoot('tslint.json');
    copyRoot('readme.md');
    copyRoot('package.json');
    console.log('Copy source files successfully!');
  } catch (error) {
    console.error(error);
  }
}

function copyRoot(name) {
  fs.copyFileSync(path.join(__dirname, name), path.join(__dirname, `./deploy/${name}`));
  console.log(`Copy file ${name} successfully!`);
}