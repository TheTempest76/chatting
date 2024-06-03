import express from "express"
import SocketService from "./socket";
import http from 'http'
const app = express();
const port  = process.env.PORT || 3001;

const server = http.createServer(app)

SocketService.attach(server)


server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  }

);

