const copyfiles = require('copyfiles');
const fs = require('fs');
const path = require('path');

!fs.existsSync('./deploy') && fs.mkdirSync('./deploy');
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

function copyFiles(files) {
  return new Promise((resolve, reject) => {
    copyfiles(files, { up: 1, verbose: false }, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });

}