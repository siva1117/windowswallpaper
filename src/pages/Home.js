//Lib
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux';

//Custom Imports
import Slider from '../components/Slider';
import Mediagrid from '../components/Mediagrid/Mediagrid'
import { getTopWallpapers, getLatestWallpapers } from '../redux/actions/wallpaperActions';


class Home extends Component {

    componentDidMount() {
        this.props.getTopWallpapers();
        this.props.getLatestWallpapers();
    }

    render() {
        // @todo move this to new components to avoid multiple rendering of whole page
        const { topWallpapers, latestWallpapers } = this.props;
        return (
            <div className="container">
                <h2>Top Wallpapers </h2>
                <Slider media={topWallpapers} show={5}/>
                <h2>Latest Wallpapers</h2>
                <Mediagrid mediaList={latestWallpapers} show={16}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('KIMMY', state);
    return {
        topWallpapers: state.wallpapers.top,
        latestWallpapers: state.wallpapers.latest
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTopWallpapers: () => dispatch(getTopWallpapers()),
        getLatestWallpapers: () => dispatch(getLatestWallpapers())
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'wallpapers'
        }
    ])
)(Home);