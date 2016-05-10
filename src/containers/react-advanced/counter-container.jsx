import React from 'react';

import Counter from '../../components/react-advanced/counter.jsx';
import CounterControls from '../../components/react-advanced/counter-controls.jsx';

export default class CounterContainer extends React.Component {

	onIncrementClick() {
		console.log('on increment click');
	}

	onDecrementClick() {
		console.log('on decrement click');
	}

	render() {
		const { value } = this.props;
		return (
			<div className="wrapper-internal">
				<Counter value={100} />
				<CounterControls
					onIncrementClick={this.onIncrementClick.bind(this)}
					onDecrementClick={this.onDecrementClick.bind(this)}
				/>
			</div>
		);
	}
}
