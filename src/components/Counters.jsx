import React, { Component } from "react";
import Counter from "./Counter";
export default class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };
    handleDelete = (counterId) => {
        let counters = this.state.counters.filter(
            (counter) => counter.id !== counterId
        );
        this.setState({
            counters,
        });
    };
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };
    handleReset = () => {
        let counters = [];
        this.state.counters.forEach((counter) => {
            let count = { ...counter };
            count.value = 0;
            counters.push(count);
        });
        this.setState({ counters });
    };
    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm sm-2"
                >
                    Reset
                </button>
                {this.state.counters.map((counter) => (
                    <Counter
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        key={counter.id}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}
