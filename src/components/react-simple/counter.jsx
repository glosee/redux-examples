import React from 'react';

const Counter = props => (
	<div className="counter">
		<p>{props.value}</p>
	</div>
);

Counter.propTypes = {
	value: React.PropTypes.number.isRequired,
};

export default Counter;
