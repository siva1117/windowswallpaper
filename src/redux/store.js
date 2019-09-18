//Lib Imports
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {getFirestore, reduxFirestore} from "redux-firestore";
import {getFirebase, reactReduxFirebase } from "react-redux-firebase";

//Custom Lib
import rootReducer from "./reducers/rootReducer";
import firebase from "../config/fbConfig";

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};


let middleware = [thunk.withExtraArgument({getFirebase, getFirestore})];
//@todo uncomment below before final deployment
// if (process.env.NODE_ENV !== 'production') {
middleware = [...middleware, logger];
// }


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    applyMiddleware(...middleware),
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Create store with reducers and initial state
export default createStoreWithFirebase(rootReducer);