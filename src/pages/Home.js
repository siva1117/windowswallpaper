import React from 'react';
import Slider from '../components/Slider';
import Mediagrid from '../components/Mediagrid/Mediagrid'

function Home(props) {
    return (
        <div className="container">
            <h1>Top Wallpapers</h1>
            <Slider/>
            <h2>Latest Wallpapers</h2>
            <Mediagrid/>
        </div>
    );
}

export default Home;