import React from 'react';
import './Counter.css';

class Counter extends React.Component {
	state = {
		count: 0,
		step: 1,
		max: 10,
		min: -10,
	};

	increment = () => {
		const max = this.state.max;
		const step = this.state.step;

		if (this.state.count >= max) {
			alert(`count > ${max}`);
		} else {
			this.setState({
				count: this.state.count + step
			});
		}
	}

	decrement = () => {
		const min = this.state.min;
		const step = this.state.step;

		if (this.state.count <= min) {
			alert(`count < ${min}`);
		} else {
			this.setState({
				count: this.state.count - step
			});
		}
	}

	render() {
		return (
			<div className={"counter"}>
				<button onClick={this.decrement}>
					<img src="https://img.icons8.com/material-two-tone/24/000000/minus--v1.png"/>
				</button>
				<p>Counter</p>
				<span className={"count"}>{this.state.count}</span>
				<button onClick={this.increment}>
					<img src="https://img.icons8.com/android/24/000000/plus.png"/>
				</button>
			</div>
		);
	}
}

export default Counter;
