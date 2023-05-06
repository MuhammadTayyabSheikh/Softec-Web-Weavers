const socketIo = require('socket.io');
const { decodeToken } = require('./token');

let io;

const socketInit = (server) => {
  io = socketIo(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('New client connected');

    const { token } = socket.handshake.query;

    const { id } = decodeToken(token);

    if (id) {
      socket.join(id);
      console.log('Client joined room: ', id);
    }

    socket.on('disconnect', () => {
      console.log('Client disconnected', id);
    });
  });

  console.log('Socket initialized');
};

module.exports = {
  socketInit,
  io,
};
