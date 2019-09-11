//Custom imports
import ActionTypes from '../actions/actionTypes'

const initState = {
    top:[],
    latest:[]
};

const wallpaperReducer = (state = initState, action) => {
    switch(action.type) {
        case ActionTypes.GET_TOP_WALLPAPERS:
            return {
                ...state,
                top: action.payload
            };
        case ActionTypes.GET_LATEST_WALLPAPERS: // @todo craete ACTION_TYPES enums
            return {
                ...state,
                latest: action.payload
            };
        default:
            return state;
    }
};

export default wallpaperReducer;