import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        value: this.props.value,
    };

    formatCount = () => {
        return this.state.value === 0 ? "Zero" : this.state.value;
    };
    increment = () => {
        this.setState({ value: this.state.value + 1 });
    };
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.increment}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    };
}
