"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
class SocketService {
    constructor() {
        console.log('init socket service');
        this.io = new socket_io_1.Server({
            cors: {
                allowedHeaders: ['*'],
                origin: '*',
            },
        });
    }
    attach(server) {
        this.io.attach(server);
        this.initListener();
    }
    initListener() {
        const io = this.io;
        io.on('connection', (socket) => {
            console.log('A user connected');
            socket.on('message', (msg) => {
                console.log('Message received:', msg);
            });
            socket.on('disconnect', () => {
                console.log('A user disconnected');
            });
        });
    }
}
const socketService = new SocketService();
exports.default = socketService;
