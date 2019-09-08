// Lib imports
import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';


// Custom imports
import Spinner from './components/Spinner';
import Header from './components/Header';
import Footer from './components/Footer'
import './App.css';

// Lazy load pages
const Home = lazy(()=> import('./pages/Home'));
const About = lazy(()=> import('./pages/About'));
const Contact = lazy(()=> import('./pages/Contact'));
const Upload = lazy(()=> import('./pages/Upload'));

class App extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route exact path="/upload" component={Upload}/>
                        </Switch>
                    </Suspense>
                    <Footer/>
                </Router>
            </div>

        );
    }
}

export default App;
