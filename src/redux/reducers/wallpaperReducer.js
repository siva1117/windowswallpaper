//Custom imports
import ActionTypes from '../actions/actionTypes'

const initState = {
    top:[],
    latest:[],
    wallpaper: {}
};

const wallpaperReducer = (state = initState, action) => {
    switch(action.type) {
        case ActionTypes.GET_TOP_WALLPAPERS:
            return {
                ...state,
                top: action.payload
            };
        case ActionTypes.GET_LATEST_WALLPAPERS:
            return {
                ...state,
                latest: action.payload
            };
        case ActionTypes.GET_WALLPAPER_INFO:
            return {
                ...state,
                wallpaper: action.payload
            };
        default:
            return state;
    }
};

export default wallpaperReducer;