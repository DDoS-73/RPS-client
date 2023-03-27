import { io, Socket } from 'socket.io-client';
import { JoinToRoomResponse } from '../../models/JoinToRoomResponse';

export interface ServerToClientEvents {
	noArg: () => void;
	basicEmit: (a: number, b: string, c: Buffer) => void;
	withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
	join: (
		roomID: string,
		callback: (response: JoinToRoomResponse) => void
	) => void;
}

class SocketService {
	private _socket: Socket<ServerToClientEvents, ClientToServerEvents> | null =
		null;

	connect(url: string): Promise<boolean> {
		this._socket = io(url);

		return new Promise((rs, rj) => {
			this._socket?.on('connect', () => {
				rs(true);
			});

			this._socket?.on('connect_error', (err: Error) => {
				rj(false);
				throw err;
			});
		});
	}

	get socket(): Socket<ServerToClientEvents, ClientToServerEvents> | null {
		return this._socket;
	}

	disconnect() {
		this.socket?.disconnect();
	}
}

export default new SocketService();
