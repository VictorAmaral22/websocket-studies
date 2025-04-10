const express = require('express');

const app = express();

const PORT = 3000;

const io = require('socket.io')(3001, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        return io.emit('chat message', `${socket.id.substr(0, 2)}: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});