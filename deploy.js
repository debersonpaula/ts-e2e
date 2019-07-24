const fs = require('fs');
const path = require('path');
const copyFiles = require('./helpers/copyFiles');
const createDir = require('./helpers/createDir');

// !fs.existsSync('./deploy') && fs.mkdirSync('./deploy');
createDir('./deploy');
copyFiles(['./tmp/**/*', './deploy']).then(() => {
  console.log('Copy source files successfully!');
  copyRoot('tsconfig.json');
  copyRoot('tslint.json');
  copyRoot('readme.md');
  copyRoot('package.json');
}).catch(err => console.log(err));


function copyRoot(name) {
  fs.copyFileSync(path.join(__dirname, name), path.join(__dirname, `./deploy/${name}`));
  console.log(`Copy file ${name} successfully!`);
}

