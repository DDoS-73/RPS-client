import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SocketService from '../../services/SocketService/SocketService';
import GameService from '../../services/GameService/GameService';
import WaitingRoom from '../../components/WaitingRoom';
import PlayRoom from '../../components/PlayRoom';

interface IGameProps {
	isConnected: boolean;
}

export interface IStartGame {
	started: boolean;
}

const Game: FC<IGameProps> = ({ isConnected }) => {
	const { roomID } = useParams();
	const [isStarted, setIsStarted] = useState(false);

	const joinToRoom = async () => {
		await GameService.joinToRoom(SocketService.socket, roomID || '');
	};

	const handleGameStart = () => {
		GameService.startGame(SocketService.socket, ({ started }) => {
			setIsStarted(started);
		});
	};

	useEffect(() => {
		if (isConnected) {
			joinToRoom();
			handleGameStart();
		}
	}, [isConnected]);

	return <>{isStarted ? <PlayRoom /> : <WaitingRoom />}</>;
};

export default Game;
