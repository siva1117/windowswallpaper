import { combineReducers } from "redux";
import wallpaperReducer from './wallpaperReducer';

const rootReducer = combineReducers({
    wallpaper: wallpaperReducer
});


export default rootReducer;