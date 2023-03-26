import React from 'react';
import styled from 'styled-components';
import { WrapperStyled, ButtonStyled } from '../../styled';

const Subtitle = styled.h2`
	color: var(--secondary);
	margin-top: 0;
`;

const Home = () => {
	return (
		<WrapperStyled>
			<h1>Hello</h1>
			<Subtitle>Let&apos;s play</Subtitle>
			<ButtonStyled>Start</ButtonStyled>
		</WrapperStyled>
	);
};

export default Home;
