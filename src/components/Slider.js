import React, { Component } from 'react';
import M from 'materialize-css';

class Slider extends Component {
    componentDidMount() {
        // @todo this should only init on promise resolve
        M.Slider.init(document.querySelectorAll('.slider'));
    }
    render() {
        return (
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src="https://placeimg.com/1920/1080/people" alt="Kim"/>
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-darken-2">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://placeimg.com/1920/1080/animals"  alt="Kim"/>
                        <div className="caption left-align">
                            <h3>Left Aligned Caption</h3>
                            <h5 className="light grey-text text-darken-2">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://placeimg.com/1920/1080/arch"  alt="Kim"/>
                        <div className="caption right-align">
                            <h3>Right Aligned Caption</h3>
                            <h5 className="light grey-text text-darken-2">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://placeimg.com/1920/1080/nature"  alt="Kim"/>
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-darken-2">Here's our small slogan.</h5>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Slider;


