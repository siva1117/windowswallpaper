//Lib imports
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

//Custom imports
import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import fbConfig from './config/fbConfig';


let middleware = [thunk.withExtraArgument({getFirebase, getFirestore})];
//@todo uncomment below before final deployment
// if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
// }

const store = createStore(rootReducer,
    compose(
        applyMiddleware(...middleware),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    ));


class Main extends Component {
    render() {
        return (<div><Provider store={store}><App/></Provider></div>);
    }
}

export default Main;