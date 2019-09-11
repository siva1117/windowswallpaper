const initState = {
    top:[],
    latest:[]
};

const wallpaperReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GET_TOP_WALLPAPERS': // @todo craete ACTION_TYPES enums
            return {
                ...state,
                top: action.payload
            };
        case 'GET_LATEST_WALLPAPERS': // @todo craete ACTION_TYPES enums
            return {
                ...state,
                latest: action.payload
            };
        default:
            return state;
    }
};

export default wallpaperReducer;