//Lib imports
import Axios from 'axios';

//Custom Imports
import ActionTypes from './actionTypes'

export const  getTopWallpapers  =  () => {
    return (dispatch, getstate) => {
        Axios.get(`${process.env.REACT_APP_HOST_NAME}/api/v1/top`)
            .then(res => {
                dispatch({type: ActionTypes.GET_TOP_WALLPAPERS, payload: res.data});
            })
            .catch(err => console.log(err));
    }
};

export  const getLatestWallpapers = () => {
    return (dispatch, getstate) => {
        Axios.get(`${process.env.REACT_APP_HOST_NAME}/api/v1/latest`)
            .then((res)=>{
                dispatch({type: ActionTypes.GET_LATEST_WALLPAPERS, payload: res.data});
            })
            .catch(err => console.log(err));
    }
};