//Custom imports
import ActionTypes from '../actions/actionTypes'

const initState = {
    comments:[]
};

const commentsReducer = (state = initState, action) => {
    switch(action.type) {
        case ActionTypes.GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    }
};

export default commentsReducer;