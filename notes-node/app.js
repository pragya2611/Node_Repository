console.log('starting the app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

let command = process.argv[2];

console.log(yargs);
console.log(command)

const notes = require('./notes');

