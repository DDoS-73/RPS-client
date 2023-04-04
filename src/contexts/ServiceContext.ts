import SocketService from '../services/SocketService/SocketService';
import GameService from '../services/GameService/GameService';
import React from 'react';

interface IServiceContext {
	gameService: GameService;
	socketService: SocketService;
}

export const ServiceContext = React.createContext<IServiceContext>(
	{} as IServiceContext
);
