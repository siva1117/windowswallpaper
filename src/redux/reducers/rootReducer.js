import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'

import wallpaperReducer from './wallpaperReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    wallpapers: wallpaperReducer,
    comments: commentsReducer
});


export default rootReducer;