//Lib imports
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

//Custom imports
import App from './App';
import rootReducer from './redux/reducers/rootReducer';


let middleware = [thunk, logger];
//@todo uncomment below before final deployment
// if (process.env.NODE_ENV !== 'production') {
//     middleware = [...middleware, logger]
// }

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

class Main extends Component {
    render() {
        return (<div><Provider store={store}><App/></Provider></div>);
    }
}

export default Main;