// Lib imports
import React, { Component } from 'react';
import M from 'materialize-css';

// Custom imports
import './App.css';

class App extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="App">
                <h1>Kim Wallpapers</h1>
            </div>
        );
    }
}

export default App;
