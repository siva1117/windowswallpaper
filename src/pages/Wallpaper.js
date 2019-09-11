//Lib imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

//Custom Imports
import Comments from '../components/Comments'
import { getWallpaperInfo } from '../redux/actions/wallpaperActions';

class Wallpaper extends Component {

    state = {
        id: null,
        wallpaper : {},
        comments: []
    };

    componentDidMount() {
        this.props.getWallpaperInfo(this.props.match.params.id);
        Axios.get(`${process.env.REACT_APP_HOST_NAME}/api/v1/comments?id=${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    comments: res.data
                });
            })
            .catch(err => console.log(err))
    }

    render() {
        const { wallpaper } = this.props;
        const comments = this.state.comments;

        return wallpaper ? (
                    <div className="container">
                        <h2> {wallpaper.title} </h2>
                        <div className="row">
                            <div className="col s8">
                                <img src={wallpaper.url} alt={wallpaper.title} className="responsive-img" />
                            </div>
                            <div className="col s4">
                                <p>Todo Media grid from same category should be placed here</p>
                            </div>
                </div>
                <h3>Comments</h3>
                <div>Add Comment Component should come here </div>
                <Comments comments={comments}/>
            </div>
        ) : (
            <div className="center">No Info available</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wallpaper: state.wallpapers.wallpaper
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWallpaperInfo: (id) => dispatch(getWallpaperInfo(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallpaper);