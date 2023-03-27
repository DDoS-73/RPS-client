import { Socket } from 'socket.io-client';
import {
	ClientToServerEvents,
	ServerToClientEvents,
} from '../SocketService/SocketService';
import { JoinToRoomResponse } from '../../models/JoinToRoomResponse';

class GameService {
	joinToRoom(
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | null,
		roomID: string
	): Promise<string> {
		return new Promise((rs) => {
			socket?.emit('join', roomID, (response: JoinToRoomResponse) => {
				rs(response.status);
			});
		});
	}
}

export default new GameService();
