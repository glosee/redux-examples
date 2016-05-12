import { createStore } from 'redux';

// Our application's initial STATE
const INITIAL_STATE = 0;

// Enumerated list of ACTION names
const ACTIONS = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
};

// REDUCER
function counter(state, action) {

	// When state is undefined return an expected initialState. This could happen during an initialization sequence,
	// or if there was some kind of error. Doing this allows the application to continue, and components could potentially
	// tell whether or not they need to change.
	if (typeof state === 'undefined') {
		return INITIAL_STATE;
	}

	// Based on the action that was passed in, compute and return the next state. Only handle actions of type that you
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

// Initialize the STORE by passing in the reducer.
const store = createStore(counter);

//
// Boring vanilla JS code to update the application based on the store...
//

// Deal with displaying the application's state from the store - aka "render"
const counterEl = document.getElementById('counter');
function render() {
	console.log('RENDER!');
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
