import { combineReducers } from "redux";
import wallpaperReducer from './wallpaperReducer';

const rootReducer = combineReducers({
    wallpapers: wallpaperReducer
});


export default rootReducer;