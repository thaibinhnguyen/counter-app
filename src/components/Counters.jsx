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
    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter
                        onDelete={this.handleDelete}
                        key={counter.id}
                        value={counter.value}
                        id={counter.id}
                    />
                ))}
            </div>
        );
    }
}
