//Lib imports
import React from 'react';
import { Link } from 'react-router-dom';

//Custom imports
import './mediagrid.css';

function Mediagrid(props) {

    const {mediaList, show} = props;
    const mediaGrid = mediaList.length ? (
        mediaList.map(media => {
            return (
                <div className="cell" key={media.id}>
                    <Link to={`/wallpaper/${media.id}`}><img src={media.thumbnail} className="responsive-img" alt={media.title}  /></Link>
                </div>
            );
        }).slice(0,show)
    ) : (<div className="center">No Media found</div>);

    return (
        <div className="media-grid">
            <div className="grid">
                {mediaGrid}
            </div>
        </div>
    );
}
export default Mediagrid;