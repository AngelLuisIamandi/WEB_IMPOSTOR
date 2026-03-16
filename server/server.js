const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Jugador conectado:', socket.id);
    socket.on('mensaje_chat', (data) => {
        if (data.targetId) {
            io.to(data.targetId).emit('mensaje_chat', data);
        } else {
            io.emit('mensaje_chat', data);
        }
    });

    socket.on('disconnect', () => {
        console.log('Jugador desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});