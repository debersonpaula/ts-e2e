const fs = require('fs');
const copyFiles = require('./helpers/copyFiles');

copyFilesBeforeTesting();

// copyfiles(['./playground/**/*.feature', './tmp'], { up: 1, verbose: true }, err => {
//   if (err) {
//     console.error(err);
//   }
//   console.log('Copy feature files finished!');
// });

// copyfiles(['./lib/**/*.js', './tmp/lib'], { up: 1, verbose: true }, err => {
//   if (err) {
//     console.error(err);
//   }
//   console.log('Copy js files finished!');
// });

// fs.mkdirSync('./tmp/results');
// fs.writeFileSync('./tmp/results/output_result.json', '{}');

async function copyFilesBeforeTesting() {
  await copyFiles(['./playground/**/*.feature', './tmp']);
  await copyFiles(['./playground/**/*.feature', './tmp/playground']);
  await copyFiles(['./src/**/*.js', './tmp/src']);
  fs.mkdirSync('./tmp/results');
  console.log('copy files sucessfully!')
}