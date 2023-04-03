import { Signs } from '../models/Signs';

export const chooseWinner = (player1: Signs, player2: Signs) => {
	if (player1 === player2) {
		return 'Tie -_-';
	} else if (
		(player1 === 'rock' && player2 === 'scissors') ||
		(player1 === 'paper' && player2 === 'rock') ||
		(player1 === 'scissors' && player2 === 'paper')
	) {
		return 'You win :)';
	} else {
		return 'You lose :(';
	}
};
