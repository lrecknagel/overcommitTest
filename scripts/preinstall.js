#!/usr/bin/env node

const util = require('util'),
  exec = util.promisify(require('child_process').exec);

async function initOvercommit() {
  try {
    await exec(`overcommit --install`);
  } catch (error) {
    console.log(error);
    console.log('Please install overcommit, see: https://github.com/brigade/overcommit#installation');
  }
}

async function run() {
  try {
    // initialize overcommit
    await initOvercommit();
  } catch (err) {
    console.log('ERROR_IN_PREINSTALL');
    console.log(err);
  }
}

run();