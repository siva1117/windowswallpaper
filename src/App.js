// Lib imports
import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import M from 'materialize-css';

// Custom imports
import Spinner from './components/Spinner'
import './App.css';

// Lazy load pages
const Home = lazy(()=> import('./pages/Home'));
const About = lazy(()=> import('./pages/About'));
const Contact = lazy(()=> import('./pages/Contact'));

class App extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="App">
            <Router>
                <Suspense fallback={<Spinner/>}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                </Suspense>
            </Router>
            </div>

        );
    }
}

export default App;
