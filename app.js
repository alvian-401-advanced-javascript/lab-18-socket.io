'use strict';

const HOST = process.env.HOST;
const PORT = process.env.PORT || 3000;

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

// Import load, save and convert functions
const { loadFile, saveFile, convertBuffer } = require('./lib/load-save-convert.js')
 

/**
 * This function reads a file and replaces its contents with
 * uppercased letters. It sends an object to the Socket.io server
 * on completion or error.
 * @function
 * @name alterFile
 * @param file {path} The path to a file on the filesystem
 */
const alterFile = (file) => {
  if (!file) {console.log('must include txt file')}
  return loadFile(file)
    .then(buffer => convertBuffer(buffer))
    .then(buffer => saveFile(file, buffer))
    .then(() => socket.emit('file-save', file) && socket.disconnect(true), 500)
    .catch(err => socket.emit('file-error', err.message) && socket.disconnect(true), 500);
}

const file = process.argv.slice(2).shift();
alterFile(file);
