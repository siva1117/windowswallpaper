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
    };

    componentDidMount() {
        //@todo  .env files to switch API's
        //@todo change Api's to expect limit
        //get top wallpapers
        Axios.get('/api/v1/top')
            .then(res => {
                this.setState({
                    topWallpapers: res.data
                });
            })
            .catch(err => console.log(err));

        //get latest wallpapers
        Axios.get('/api/v1/latest')
            .then((res)=>{
                this.setState({
                    latestWallpapers: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Top Wallpapers {this.state.name} </h2>
                <Slider media={this.state.topWallpapers} show={5}/>
                <h2>Latest Wallpapers</h2>
                <Mediagrid mediaList={this.state.latestWallpapers} show={9}/>
            </div>
        );
    }
}

export default Home;