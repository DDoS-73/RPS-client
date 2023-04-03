import { Socket } from 'socket.io-client';
import {
	ClientToServerEvents,
	ServerToClientEvents,
} from '../SocketService/SocketService';
import { JoinToRoomResponse } from '../../models/JoinToRoomResponse';
import { IStartGame } from '../../pages/Game/Game';
import { Signs } from '../../models/Signs';

class GameService {
	public joinToRoom(
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | null,
		roomID: string
	): Promise<string> {
		return new Promise((rs) => {
			socket?.emit('join', roomID, (response: JoinToRoomResponse) => {
				rs(response.status);
			});
		});
	}

	public startGame(
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | null,
		listener: (options: IStartGame) => void
	) {
		socket?.on('game_start', listener);
	}

	public move(
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | null,
		sign: Signs
	) {
		socket?.emit('move', sign);
	}

	public opponentMove(
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | null,
		listener: (options: Signs) => void
	) {
		socket?.on('opponent_move', listener);
	}
}

export default new GameService();
