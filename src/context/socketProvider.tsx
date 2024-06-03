'use client';
import React, { createContext, useCallback, useEffect, useContext, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
  children: React.ReactNode;
}

interface ISocketContext {
  sendMessage: (msg: string) => void;
}

const SocketContext = createContext<ISocketContext | null>(null);

export function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);

  const sendMessage = useCallback((msg: string) => {
    if (socket) {
      socket.emit('message', msg);
      console.log(`sent message: ${msg}`);
    } else {
      console.log('Socket is not connected');
    }
  }, [socket]);

  useEffect(() => {
    const _socket = io('http://localhost:3001');
    _socket.on('connect', () => {
      console.log('Socket connected');
      setSocket(_socket);
    });

    _socket.on('disconnect', () => {
      console.log('Socket disconnected');
      setSocket(null);
    });

    _socket.on('message', (msg) => {
      console.log('Message received:', msg);
    });

    return () => {
      _socket.disconnect();
      console.log('Socket disconnected and cleaned up');
    };
  }, []);

  const contextValue: ISocketContext = { sendMessage };

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};
