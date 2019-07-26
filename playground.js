const fs = require('fs');
const copyFiles = require('./helpers/copyFiles');

copyFilesBeforeTesting();

async function copyFilesBeforeTesting() {
  await copyFiles(['./playground/**/*.feature', './tmp']);
  await copyFiles(['./playground/**/*.feature', './tmp/playground']);
  await copyFiles(['./src/**/*.js', './tmp/src']);
  fs.mkdirSync('./tmp/results');
  console.log('copy files sucessfully!')
}