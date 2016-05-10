import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

import counterReducer from '../../reducers/counterReducer.js';

import App from '../../components/react-advanced/app.jsx';

const devTools = window.devToolsExtension && window.devToolsExtension();

const store = createStore(counterReducer, devTools);

const renderApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

// Render the application to the DOM
render(renderApp(), document.getElementById('root'));
