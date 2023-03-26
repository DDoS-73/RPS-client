import React from 'react';
import styled from 'styled-components';
import { WrapperStyled, ButtonStyled } from '../../styled';
import generateRoomID from '../../utils/generateRoomID';
import { useNavigate } from 'react-router-dom';

const Subtitle = styled.h2`
	color: var(--secondary);
	margin-top: 0;
`;

const Home = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		const roomID = generateRoomID();
		navigate(`/${roomID}`);
	};

	return (
		<WrapperStyled>
			<h1>Hello</h1>
			<Subtitle>Let&apos;s play</Subtitle>
			<ButtonStyled onClick={handleClick}>Start</ButtonStyled>
		</WrapperStyled>
	);
};

export default Home;
