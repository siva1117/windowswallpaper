//Lib Imports
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {getFirestore, reduxFirestore} from "redux-firestore";
import {getFirebase, reactReduxFirebase } from "react-redux-firebase";

//Custom Lib
import rootReducer from "./reducers/rootReducer";
import fbConfig from "../config/fbConfig";

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


export default store;