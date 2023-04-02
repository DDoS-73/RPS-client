import React, { useState } from 'react';
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
	const [chosenSign, setChosenSign] = useState<IconDefinition | null>(null);
	const [opponentSign, setOpponentSign] = useState<IconDefinition | null>(null);

	const signs: Record<string, IconDefinition> = {
		paper: faHandPaper,
		rock: faHandRock,
		scissors: faHandScissors,
	};

	const handleClick = (name: string) => {
		setChosenSign(signs[name ?? '']);
	};

	return (
		<Container>
			<PlayerName>Your friend</PlayerName>
			<ChosenSign icon={opponentSign} />
			<TextField>0:0</TextField>
			<ChosenSign icon={chosenSign} />
			<PlayerName>Choose a sign</PlayerName>
			<SignsContainer>
				{Object.entries(signs).map(([name, icon]) => (
					<HandSign key={name} onClick={handleClick} icon={icon} name={name} />
				))}
			</SignsContainer>
		</Container>
	);
};

export default PlayRoom;
