import actions from '../actions/counterActions.js';

const INITIAL_STATE = 0;

// REDUCER
export default function counter(state, action) {

	console.log('counter reducer', state, action);

	// When state is undefined return an expected initialState. This could happen during an initialization sequence,
	// or if there was some kind of error.
	if (typeof state === 'undefined') {
		return INITIAL_STATE;
	}

	// Based on the action that was passed in, calculate and return the next state. Only handle actions of type that you
	// know. Ignore any other actions by returning the state that was passed in.
	switch (action.type) {
		case actions.INCREMENT:
			console.log('increment!');
			return state + 1;
		break;
		case actions.DECREMENT:
			console.log('decrement!');
			return state - 1;
		break;
		default:
			console.log('unable to handle action');
			return state;
	}
}
