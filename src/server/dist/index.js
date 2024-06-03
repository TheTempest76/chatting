"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_1 = __importDefault(require("./socket"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const server = http_1.default.createServer(app);
socket_1.default.attach(server);
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
