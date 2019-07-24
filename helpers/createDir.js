const fs = require('fs');

function createDir(path) {
  !fs.existsSync(path) && fs.mkdirSync(path);
}

module.exports = createDir;