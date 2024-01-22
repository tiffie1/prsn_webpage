const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const chokidar = require('chokidar');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('.')); // serve static files from current directory

const watcher = chokidar.watch('test.txt', { persistent: true });

watcher.on('change', (path) => {
    console.log('File changed: ', path);
    io.emit('fileChanged', { path });
});

server.listen(3000, () => {
    console.log('Listening on port 3000');
});