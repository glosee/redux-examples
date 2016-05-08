import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/react-simple/counter.jsx';

function renderApp() {
	return (
		<div className="wrapper-app">
			<h1>Hello, from React</h1>
			<h2>Much reaction</h2>
			<Counter value={1}/>
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
