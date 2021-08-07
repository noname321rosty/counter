import React from 'react';
import './Counter.css';

class Counter extends React.Component {
	state = {count: 0};

	increment = () => {
		this.setState({
			count: this.state.count + 1
		});
	}

	decrement = () => {
		this.setState({
			count: this.state.count - 1
		});
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
