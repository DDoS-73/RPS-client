import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	faHandPaper,
	faHandScissors,
	faHandRock,
	IconDefinition,
} from '@fortawesome/free-regular-svg-icons';
import ChosenSign from '../ChosenSign';
import HandSign from '../HandSign';
import { TextField } from '../../styled';
import { Signs } from '../../models/Signs';
import { chooseWinner } from '../../utils/chooseWinner';
import { getKeyByValue } from '../../utils/getKeyByValue';
import { ServiceContext } from '../../contexts/ServiceContext';

const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled(FlexContainer)`
	flex-direction: column;
	justify-content: space-between;
	padding: 15px;
	height: 100%;
	max-width: 410px;
	margin: 0 auto;
`;

const PlayerName = styled.h2`
	margin: 0;
`;

const SignsContainer = styled(FlexContainer)`
	justify-content: space-between;
	width: 100%;
`;

const PlayRoom = () => {
	const [userSign, setUserSign] = useState<IconDefinition | null>(null);
	const [opponentSign, setOpponentSign] = useState<IconDefinition | null>(null);
	const [disabled, setDisabled] = useState(false);
	const [message, setMessage] = useState('New Round!');
	const { gameService } = useContext(ServiceContext);

	const signs: Record<Signs, IconDefinition> = {
		paper: faHandPaper,
		rock: faHandRock,
		scissors: faHandScissors,
	};

	const resetGame = () => {
		setDisabled(false);
		setUserSign(null);
		setOpponentSign(null);
		setMessage('New Round!');
	};

	const completeRound = () => {
		setDisabled(true);
		const user = getKeyByValue<IconDefinition | null>(signs, userSign);
		const opponent = getKeyByValue<IconDefinition | null>(signs, opponentSign);
		setMessage(chooseWinner(user as Signs, opponent as Signs));
		setTimeout(resetGame, 4000);
	};

	const handleUserMove = (sign: Signs) => {
		if (!disabled) {
			setUserSign(signs[sign]);
			gameService.move(sign);
		}
	};

	const onOpponentMove = () => {
		gameService.opponentMove((sign: Signs) => {
			setOpponentSign(signs[sign]);
		});
	};

	useEffect(() => {
		onOpponentMove();
	}, []);

	useEffect(() => {
		if (userSign && opponentSign) {
			completeRound();
		}
	}, [userSign, opponentSign]);

	return (
		<Container>
			<PlayerName>Your friend</PlayerName>
			<ChosenSign icon={opponentSign} condition={!!userSign} />
			<TextField>{message}</TextField>
			<ChosenSign icon={userSign} condition={true} />
			<PlayerName>Choose a sign</PlayerName>
			<SignsContainer>
				{Object.entries(signs).map(([name, icon]) => (
					<HandSign
						key={name}
						onClick={() => handleUserMove(name as Signs)}
						icon={icon}
					/>
				))}
			</SignsContainer>
		</Container>
	);
};

export default PlayRoom;
