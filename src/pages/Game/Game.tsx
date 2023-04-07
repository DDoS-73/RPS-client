import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WaitingRoom from '../../components/WaitingRoom';
import PlayRoom from '../../components/PlayRoom';
import { ServiceContext } from '../../contexts/ServiceContext';

const Game = () => {
	const { roomID } = useParams();
	const [isStarted, setIsStarted] = useState(false);
	const { gameService } = useContext(ServiceContext);

	const joinToRoom = () => {
		gameService.joinToRoom(roomID || '');
	};

	const handleGameStart = () => {
		gameService.startGame(({ started }) => {
			setIsStarted(started);
		});
	};

	const handleOpponentLeave = () => {
		gameService.opponentLeave(() => {
			setIsStarted(false);
		});
	};

	useEffect(() => {
		joinToRoom();
		handleGameStart();
		handleOpponentLeave();
	}, []);

	return <>{isStarted ? <PlayRoom /> : <WaitingRoom />}</>;
};

export default Game;
