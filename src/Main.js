//Lib imports
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//Custom imports
import App from './App';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

class Main extends Component {
    render() {
        return (<div><Provider store={store}><App/></Provider></div>);
    }
}

export default Main;