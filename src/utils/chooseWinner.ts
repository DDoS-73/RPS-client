import { Signs } from '../models/Signs';

export const chooseWinner = (player1: Signs, player2: Signs): number => {
	if (player1 === player2) {
		return 0;
	} else if (
		(player1 === 'rock' && player2 === 'scissors') ||
		(player1 === 'paper' && player2 === 'rock') ||
		(player1 === 'scissors' && player2 === 'paper')
	) {
		return 1;
	} else {
		return -1;
	}
};
