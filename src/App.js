// Lib imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;
