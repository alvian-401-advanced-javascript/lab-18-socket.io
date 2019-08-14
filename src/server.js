'use strict';

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);
io.on('connection', doStuff);

/**
 * Handle events received by the server
 * @function
 * @name doStuff
 * @param socket {object} A Socket.io object
 **/
function doStuff(socket) {
  console.log(`Welcome, ${socket.id}`);

  socket.on('file-save', payload => socket.broadcast.emit('file-save', payload));
  socket.on('file-error', payload => socket.broadcast.emit('file-error', payload));

  socket.on('error', err => console.log(`Server error, ${err.message}`));
  socket.on('disconnect', () => console.log(`disconnecting, ${socket.id}`));
}