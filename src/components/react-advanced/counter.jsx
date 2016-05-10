import React from 'react';

const Counter = props => (
	<div className="wrapper-counter">
		<p className="counter-value">{props.value}</p>
	</div>
);

Counter.propTypes = {
	value: React.PropTypes.number,
};

export default Counter;
