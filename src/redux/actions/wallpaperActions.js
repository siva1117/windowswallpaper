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

export const getWallpaperInfo = (id) => {
    return (dispatch, getState) => {
        Axios.get(`${process.env.REACT_APP_HOST_NAME}/api/v1/wallpaper?id=${id}`)
            .then(res => {
                dispatch({type: ActionTypes.GET_WALLPAPER_INFO, payload: res.data[0]});
            })
            .catch(err => console.log(err));
    }
};

export const createWallpaper = ( wallpaper ) => {
    return (dispatch, getstate, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('wallpapers').add({
            ...wallpaper,
            userFirstName: 'Kim',
            userLastNAme: 'Kumar',
            userId: 123456,
            views: 0,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: ActionTypes.CREATE_WALLPAPER, payload: wallpaper});
        }).catch((err) => {
            dispatch({type: ActionTypes.CREATE_WALLPAPER_FAILED, payload: err});
        });
    };
};