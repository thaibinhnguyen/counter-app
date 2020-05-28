import React from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
function App() {
    return (
        <React.Fragment>
            <Navbar />
            <main className="container">
                <Counters />
            </main>
        </React.Fragment>
    );
}

export default App;
