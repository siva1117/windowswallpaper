//Lib
import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

//Custom Imports
import Slider from '../components/Slider';
import Mediagrid from '../components/Mediagrid/Mediagrid'
import { getTopWallpapers, getLatestWallpapers } from '../redux/actions/wallpaperActions';


class Home extends Component {

    //@todo Implement Redux and handle with actiosn
    state = {
        topWallpapers : [],
        latestWallpapers : []
    };

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);