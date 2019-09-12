//Lib imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Custom Imports
import Comments from '../components/Comments'
import { getWallpaperInfo } from '../redux/actions/wallpaperActions';
import { getComments } from '../redux/actions/commentsActions';

class Wallpaper extends Component {

    componentDidMount() {
        this.props.getWallpaperInfo(this.props.match.params.id);
        this.props.getComments(this.props.match.params.id);
    }

    render() {
        const { wallpaper, comments } = this.props;

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
        wallpaper: state.wallpapers.wallpaper,
        comments: state.comments.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWallpaperInfo: (id) => dispatch(getWallpaperInfo(id)),
        getComments: (id) => dispatch(getComments(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallpaper);