import styled from 'styled-components';

export const ButtonStyled = styled.button`
	background-color: transparent;
	border: 3px solid var(--primary-white);
	border-radius: 5px;
	color: var(--primary-white);
	font-size: 1.1rem;
	font-weight: bold;
	outline: none;
	padding: 5px 30px;
	text-transform: uppercase;
	transition: 0.3s;

	&:hover {
		border-color: var(--secondary);
		color: var(--secondary);
		cursor: pointer;
	}
`;
