import { Socket } from 'socket.io-client';
import { Signs } from '../../models/Signs';
import { IStartGame } from '../../models/isGameStartedResponse';

class GameService {
	static instance: GameService;

	constructor(private socket: Socket) {
		if (GameService.instance) {
			return GameService.instance;
		}
		GameService.instance = this;
	}

	public joinToRoom(roomID: string): void {
		this.socket.emit('join', roomID);
	}

	public startGame(listener: (options: IStartGame) => void) {
		this.socket.on('game_start', listener);
	}

	public move(sign: Signs) {
		this.socket.emit('move', sign);
	}

	public opponentMove(listener: (options: Signs) => void) {
		this.socket.on('opponent_move', listener);
	}
}

export default GameService;
