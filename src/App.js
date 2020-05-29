import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
class App extends Component {
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
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };
    render() {
        return (
            <React.Fragment>
                <Navbar
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onDecrement={this.handleDecrement}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
