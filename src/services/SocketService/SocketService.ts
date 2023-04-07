import { io, Socket } from 'socket.io-client';
import { Signs } from '../../models/Signs';
import { IStartGame } from '../../models/isGameStartedResponse';

export interface ServerToClientEvents {
	game_start: (options: IStartGame) => void;
	opponent_move: (sign: Signs) => void;
	connection_result: (res: boolean) => void;
	opponent_leave: () => void;
}

export interface ClientToServerEvents {
	join: (roomID: string) => void;
	move: (sign: Signs) => void;
}

class SocketService {
	private readonly _socket!: Socket<ServerToClientEvents, ClientToServerEvents>;
	static instance: SocketService;

	constructor(serverUrl: string) {
		if (SocketService.instance) {
			return SocketService.instance;
		}
		this._socket = io(serverUrl);
		SocketService.instance = this;
	}

	public onConnectionResult(listener: (res: boolean) => void) {
		this._socket.on('connection_result', listener);
	}

	get socket(): Socket<ServerToClientEvents, ClientToServerEvents> {
		return this._socket;
	}
}

export default SocketService;
