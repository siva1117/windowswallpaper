import React, { Component} from 'react';
import './mediagrid.css';

class Mediagrid extends Component {
    render() {
        return (
                <div className="media-grid">
                    <div className="grid">
                        <div className="cell"><img src="https://placeimg.com/1920/1080/animals" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/arch" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/nature" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/tech" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/greyscale" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/sepia" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/animals" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/arch" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/nature" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/tech" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/greyscale" className="responsive-image"/></div>
                        <div className="cell"><img src="https://placeimg.com/1920/1080/sepia" className="responsive-image"/></div>
                    </div>
                </div>
        );
    }
}

export default Mediagrid;