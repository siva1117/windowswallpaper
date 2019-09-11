import Axios from 'axios';

export const  getTopWallpapers  =  () => {
    return (dispatch, getstate) => {
        Axios.get(`${process.env.REACT_APP_HOST_NAME}/api/v1/top`)
            .then(res => {
                dispatch({type: 'GET_TOP_WALLPAPERS', payload: res.data});
            })
            .catch(err => console.log(err));
    }
};

export  const getLatestWallpapers = () => {
    return (dispatch, getstate) => {
        Axios.get(`${process.env.REACT_APP_HOST_NAME}/api/v1/latest`)
            .then((res)=>{
                dispatch({type: 'GET_LATEST_WALLPAPERS', payload: res.data});
            })
            .catch(err => console.log(err));
    }
};