// Lib imports
import React, { Component } from 'react';
import M from 'materialize-css';

// Custom imports
import Home from './pages/home'
import './App.css';

class App extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="App">
                <Home/>
            </div>
        );
    }
}

export default App;
