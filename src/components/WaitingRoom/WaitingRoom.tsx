import React, { useState } from 'react';
import { WrapperStyled, TextField, ButtonStyled } from '../../styled';
import { LoopingTextStyled } from '../../styled/';

const WaitingRoom = () => {
	const [btnText, setBtnText] = useState('Copy');
	const copyText = () => {
		navigator.clipboard.writeText(window.location.href);
		setBtnText('Copied');
	};
	return (
		<WrapperStyled>
			<LoopingTextStyled as='h2'>
				Send the link to your friend
			</LoopingTextStyled>
			<TextField>{window.location.href}</TextField>
			<ButtonStyled onClick={copyText}>{btnText}</ButtonStyled>
		</WrapperStyled>
	);
};

export default WaitingRoom;
