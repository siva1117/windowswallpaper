//Lib imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

//Custom imports
import App from './App';


class Main extends Component {
    render() {
        return (<div>
            <Provider store={store}>
                <App/>
            </Provider>
        </div>);
    }
}

export default Main;