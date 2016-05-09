// import { createStore } from 'redux';
// import createStore from '../../utils/createStore.js';

// Our application's initial state
const INITIAL_STATE = 0;

// Enumerated list of action names
const ACTIONS = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
};

// function createStore(reducer) {
// 	let state;
//
// 	let listeners = [];
//
// 	const getState = () => state;
//
// 	const dispatch = (action) => {
// 		state = reducer(state, action);
// 		listeners.forEach(listener => listener());
// 	}
//
// 	const subscribe = (listener) => {
// 		listeners.push(listener);
// 		return () => {
// 			listeners = listeners.filter(l => l !== listener)
// 		}
// 	}
//
// 	dispatch({});
//
// 	return { getState, subscribe, dispatch };
// }

// REDUCER
function counter(state, action) {

	console.log('counter reducer', state, action);

	// When state is undefined return an expected initialState. This could happen during an initialization sequence,
	// or if there was some kind of error.
	if (typeof state === 'undefined') {
		return INITIAL_STATE;
	}

	// Based on the action that was passed in, calculate and return the next state. Only handle actions of type that you
	// know. Ignore any other actions by returning the state that was passed in.
	switch (action.type) {
		case ACTIONS.INCREMENT:
			console.log('increment!');
			return state + 1;
		break;
		case ACTIONS.DECREMENT:
			console.log('decrement!');
			return state - 1;
		break;
		default:
			console.log('unable to handle action');
			return state;
	}
}

// Initialize the store
const store = createStore(counter, INITIAL_STATE, window.devToolsExtension ? window.devToolsExtension() : undefined);

// Deal with displaying the application's state from the store - aka "render"
const counterEl = document.getElementById('counter');
function render() {
	console.log('render', store.getState());
	counterEl.innerHTML = store.getState().toString();
}

// Render once on page load to show the initial state.
render();

// Subscribe to changes in the store, and re-render the counter when a change is detected.
store.subscribe(render);

// Hook up buttons to change the application's state
const incrementBtn = document.getElementById('btn-increment');
incrementBtn.addEventListener('click', evt => {
	store.dispatch({ type: ACTIONS.INCREMENT });
});

const decrementBtn = document.getElementById('btn-decrement');
decrementBtn.addEventListener('click', evt => {
	store.dispatch({ type: ACTIONS.DECREMENT });
});
