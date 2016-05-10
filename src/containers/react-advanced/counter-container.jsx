import { connect } from 'react-redux';
import React from 'react';

import actions from '../../actions/counterActions.js';

import Counter from '../../components/react-advanced/counter.jsx';
import CounterControls from '../../components/react-advanced/counter-controls.jsx';

const mapStateToProps = state => {
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

const CounterContainer = ({ value, onIncrementClick, onDecrementClick }) => (
	<div className="wrapper-internal">
		<Counter value={value} />
		<CounterControls
			onIncrementClick={onIncrementClick}
			onDecrementClick={onDecrementClick}
		/>
	</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
