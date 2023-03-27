import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SocketService from '../../services/SocketService/SocketService';
import GameService from '../../services/GameService/GameService';
import { WrapperStyled } from '../../styled';
import WaitingRoom from '../../components/WaitingRoom';
import PlayRoom from '../../components/PlayRoom';

const Game = () => {
	const { roomID } = useParams();
	const [status, setStatus] = useState('');

	const joinToRoom = async () => {
		const status = await GameService.joinToRoom(
			SocketService.socket,
			roomID || ''
		);
		setStatus(status);
	};

	useEffect(() => {
		if (SocketService.socket) {
			joinToRoom();
		}
	}, [SocketService.socket]);

	return (
		<>
			{status === '' ? (
				<WrapperStyled>
					<h1>Connecting</h1>
				</WrapperStyled>
			) : status === 'waiting' ? (
				<WaitingRoom />
			) : (
				<PlayRoom />
			)}
		</>
	);
};

export default Game;
