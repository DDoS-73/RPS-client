import SocketService from './SocketService/SocketService';
import GameService from './GameService/GameService';
import { SERVER_URL } from '../config';

const socketService: SocketService = new SocketService(SERVER_URL);
const gameService: GameService = new GameService(socketService.socket);

export { socketService, gameService };
