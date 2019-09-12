import { combineReducers } from "redux";

import wallpaperReducer from './wallpaperReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    wallpapers: wallpaperReducer,
    comments: commentsReducer
});


export default rootReducer;