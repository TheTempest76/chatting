import { Server } from "socket.io";
import http from "http";

class SocketService {
  public io: Server;

  constructor() {
    console.log('init socket service');
    this.io = new Server({
      cors: {
        allowedHeaders: ['*'],
        origin: '*',
      },
    });
  }

  public attach(server: http.Server): void {
    this.io.attach(server);
    this.initListener();
  }

  private initListener(): void {

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
export default socketService;
  