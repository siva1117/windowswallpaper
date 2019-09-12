//Lib imports
import Axios from 'axios';

//Custom Imports
import ActionTypes from './actionTypes'

export const  getComments  =  (id) => {
    return (dispatch, getstate) => {
        Axios.get(`${process.env.REACT_APP_HOST_NAME}/api/v1/comments?id=${id}`)
            .then(res => {
                dispatch({type: ActionTypes.GET_COMMENTS, payload: res.data});
            })
            .catch(err => console.log(err));
    }
};