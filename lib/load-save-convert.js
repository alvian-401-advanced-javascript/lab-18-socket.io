'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const loadFile = (file) => readFile(file);
const saveFile = (file, buffer) => writeFile(file, buffer);
const convertBuffer = buffer => Buffer.from( buffer.toString().trim().toUpperCase() )

module.exports = {loadFile, saveFile, convertBuffer};