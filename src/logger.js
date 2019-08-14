'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('file-save', handleFileSave);
socket.on('file-error', handleError);


function handleFileSave(payload) {
  console.log('file saved', payload);
}

function handleError(payload) {
  console.log('you goofed up', payload);
}

module.exports = { handleFileSave, handleError };
