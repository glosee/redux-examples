import { connect } from 'react-redux';
import React from 'react';

import actions from '../../actions/counterActions.js';

import Counter from '../../components/react-advanced/counter.jsx';
import CounterControls from '../../components/react-advanced/counter-controls.jsx';

const mapStateToProps = state => {
	console.log('map state to props', state);
	return {
		value: state,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => (
	{
		onIncrementClick: () => {
			dispatch({ type: actions.INCREMENT });
		},

		onDecrementClick: () => {
			dispatch({ type: actions.DECREMENT });
		},
	}
);

class CounterContainer extends React.Component {

	onIncrementClick() {
		console.log('on increment click');
	}

	onDecrementClick() {
		console.log('on decrement click');
	}

	render() {
		return (
			<div className="wrapper-internal">
				<Counter value={this.props.value} />
				<CounterControls
					onIncrementClick={this.props.onIncrementClick}
					onDecrementClick={this.props.onDecrementClick}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
