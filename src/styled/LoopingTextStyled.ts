import styled, { keyframes } from 'styled-components';

const textAnimation = keyframes`
  to {
    background-position: 450vh;
  }
`;

export const LoopingTextStyled = styled.p`
	background: linear-gradient(
		to right,
		var(--primary-white) 70%,
		var(--secondary) 30%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation-name: ${textAnimation};
	animation-duration: 30s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	margin-bottom: 0;
`;
