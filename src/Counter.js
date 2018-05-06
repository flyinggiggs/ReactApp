import React, {Component} from 'react';

class Counter extends Component {
    state ={
        number: 0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDcrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>Number: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDcrease}>-</button>
            </div>
        );
    }
}