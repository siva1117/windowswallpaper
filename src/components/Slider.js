import React, { Component } from 'react';
import M from 'materialize-css';

class Slider extends Component {
    componentDidMount() {
//        M.Slider.init(document.querySelectorAll('.slider'));

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //@todo poor solution below, shouldn't render twice handle with Promise
        M.Slider.init(document.querySelectorAll('.slider'));
    }

    render() {
        const { media, show } = this.props;
        const mediaList = media.length ? (
            media.map(photo => {
                return (
                    <li key={photo.id}>
                        <img src={photo.url} alt={photo.title}/>
                        <div className="caption right-align">
                            <h3>{photo.title}</h3>
                            <h5 className="light grey-text text-darken-2">{photo.description}</h5>
                        </div>
                    </li>
                );
            }).slice(0, show)
            ) : (
            <div className="center">No media found</div>
        );
        return (
            <div className="slider">
                <ul className="slides">
                    {mediaList}
                </ul>
            </div>
        );
    }
}
export default Slider;


