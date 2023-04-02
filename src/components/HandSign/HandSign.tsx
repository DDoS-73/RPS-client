import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100px;
	border: 4px solid var(--secondary-grey);
	border-radius: 5px;
	transition: border 0.4s;

	@media (hover: hover) {
		&:hover {
			cursor: pointer;
			border-color: var(--primary-white);
		}
	}

	&:active {
		cursor: pointer;
		border-color: var(--primary-white);
	}
`;

interface IHandSignProps {
	icon: IconDefinition;
	onClick: (name: string) => void;
	name: string;
}

const HandSign: FC<IHandSignProps> = ({ icon, onClick, name }) => {
	return (
		<Container onClick={() => onClick(name)}>
			<FontAwesomeIcon icon={icon} size='3x' />
		</Container>
	);
};

export default HandSign;
