import React from 'react';

class Counter extends React.Component {

	renderButtons() {
		return (
			<div className="wrapper-buttons">
				<button id="btn-increment" onClick={this.props.onIncrementClick}>+</button>
				<button id="btn-decrement" onClick={this.props.onDecrementClick}>-</button>
			</div>
		);
	}

	render() {
		return (
			<div className="wrapper-counter">
				<div ref="counter">{this.props.value}</div>
				{this.renderButtons()}
			</div>
		);
	}
}

Counter.propTypes = {
	value: React.PropTypes.number.isRequired,
	onIncrementClick: React.PropTypes.func.isRequired,
	onDecrementClick: React.PropTypes.func.isRequired,
};

export default Counter;
