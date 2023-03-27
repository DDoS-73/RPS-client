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
	public socket: Socket<ServerToClientEvents, ClientToServerEvents> | null =
		null;

	connect(url: string) {
		this.socket = io(url);

		this.socket.on('connect_error', (err: Error) => {
			throw err;
		});
	}
}

export default new SocketService();
