import React from 'react';

import CounterContainer from '../../containers/react-advanced/counter-container.jsx';

const App = () => (
	<div className="wrapper-app">
		<h1>Infer props directly from the store's state!</h1>
		<h2>Cool!</h2>
		<CounterContainer />
	</div>
);

export default App;
