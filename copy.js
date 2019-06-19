const copyfiles = require('copyfiles');
const fs = require('fs');

copyfiles(['./src/**/*.feature', './tmp/src'], { up: 1, verbose: true }, err => {
  if (err) {
    console.error(err);
  }
  console.log('Copy feature files finished!');
});

copyfiles(['./lib/**/*.js', './tmp/lib'], { up: 1, verbose: true }, err => {
  if (err) {
    console.error(err);
  }
  console.log('Copy js files finished!');
});

fs.mkdirSync('./tmp/results');
fs.writeFileSync('./tmp/results/output_result.json', '{}');