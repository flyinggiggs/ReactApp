import React, {Component} from 'react';

class Counter extends Component {
    state ={
        number: 0
    }

    handleIncrease = () => {
        const {number} = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDcrease = () => {
        this.setState(
           ({number}) => ({
               number: number -1
           })
        );
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

export default Counter;