//Lib
import React, { Component } from 'react';
import Axios from 'axios';

//Custom Imports
import Slider from '../components/Slider';
import Mediagrid from '../components/Mediagrid/Mediagrid'

class Home extends Component {

    //@todo Implement Redux and handle with actiosn
    state = {
        topWallpapers : [],
        latestWallpapers : []
    }

    componentDidMount() {
        //@todo  .env files to switch API's
        Axios.get('/api/v1/latest')
            .then((res)=>{
                this.setState({
                    latestWallpapers: res.data
                });
            })
            .catch((err)=> console.log(err));
    }

    render() {

        return (
            <div className="container">
                <h1>Top Wallpapers</h1>
                <Slider/>
                <h2>Latest Wallpapers</h2>
                <Mediagrid mediaList={this.state.latestWallpapers} show={9}/>
            </div>
        );
    }
}

export default Home;