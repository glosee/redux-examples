import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import Counter from '../../components/react-simple/counter.jsx';
import counterReducer from '../../reducers/counterReducer.js';
import actions from '../../actions/counterActions.js';

const store = createStore(counterReducer);

/**
* Click handler for the "decrease" button. Sends a `DECREMENT` action to the store. Passed into the `Counter` component
* so it can be called by the buttons in there.
*/
function onDecrementClick(e) {
	store.dispatch({ type: actions.DECREMENT });
}

/**
* Click handler for the "increase" button. Sends an `INCREMENT` action to the store. Passed into the `Counter` component
* so it can be called by the buttons in there.
*/
function onIncrementClick() {
	store.dispatch({ type: actions.INCREMENT });
}

function renderApp() {
	return (
		<div className="wrapper-app">
			<h1>Hello, from React</h1>
			<h2>Much reaction</h2>
			<Counter value={store.getState()} onDecrementClick={onDecrementClick} onIncrementClick={onIncrementClick} />
		</div>
	);
}

const render = () => {
	ReactDOM.render(
		renderApp(),
		document.getElementById('root')
	);
};

// Do it.
render();

// Subscribe to changes in the store so the application updates.
store.subscribe(render);
