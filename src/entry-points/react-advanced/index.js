import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

import App from './app.jsx';
import counterReducer from '../../reducers/counterReducer.js';

const store = createStore(counterReducer);

const renderApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

// Render the application to the DOM
render(renderApp(), document.getElementById('root'));
