import React, { Component } from "react";
import Counter from "./Counter";
export default class Counters extends Component {
    render() {
        const {
            onReset,
            onIncrement,
            counters,
            onDelete,
            onDecrement,
        } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm sm-2"
                >
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                        key={counter.id}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}
