import React from 'react';

const CounterControls = props => (
	<div className="wrapper-buttons">
		<button id="btn-increment" onClick={props.onIncrementClick}>+</button>
		<button id="btn-decrement" onClick={props.onDecrementClick}>-</button>
	</div>
);

CounterControls.PropTypes = {
	onIncrementClick: React.PropTypes.func,
	onDecrementClick: React.PropTypes.func,
};

export default CounterControls;
