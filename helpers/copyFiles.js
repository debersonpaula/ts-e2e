const copyfiles = require('copyfiles');

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

module.exports = copyFiles;