import React from 'react';

const Counter = props => (
	<div className="wrapper-counter">
		<div ref="counter">{props.value}</div>
	</div>
);

Counter.propTypes = {
	value: React.PropTypes.number.isRequired,
};

export default Counter;
