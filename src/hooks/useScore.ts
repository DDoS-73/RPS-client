import { useReducer } from 'react';

interface IScoreState {
	loses: number;
	wins: number;
}

type ACTION_TYPE = { type: 'win' } | { type: 'lose' };

const initialState: IScoreState = {
	loses: 0,
	wins: 0,
};

const reducer = (state: IScoreState, action: ACTION_TYPE) => {
	switch (action.type) {
		case 'win':
			return { ...state, wins: state.wins + 1 };
		case 'lose':
			return { ...state, loses: state.loses + 1 };
	}
};

export const useScore = () => {
	return useReducer(reducer, initialState);
};
