//Lib imports
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Custom imports
import App from './App';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer);

class Main extends Component {
    render() {
        return (<div><Provider store={store}><App/></Provider></div>);
    }
}

export default Main;