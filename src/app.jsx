import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import Counter from './components/react-simple/counter.jsx';
import counterReducer from './reducers/counterReducer.js';

const store = createStore(counterReducer);

function renderApp() {
	return (
		<div className="wrapper-app">
			<h1>Hello, from React</h1>
			<h2>Much reaction</h2>
			<Counter value={store.getState()} />
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
