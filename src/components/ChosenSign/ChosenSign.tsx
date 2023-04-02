import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 150px;
	width: 150px;
	border: 5px dashed var(--secondary-grey);
`;

interface IChosenSignProps {
	icon: IconDefinition | null;
}

const ChosenSign: FC<IChosenSignProps> = ({ icon }) => {
	return (
		<Container>
			{icon ? <FontAwesomeIcon icon={icon} size='5x' /> : null}
		</Container>
	);
};

export default ChosenSign;
