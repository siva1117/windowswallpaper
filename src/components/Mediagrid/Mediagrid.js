import React from 'react';
import './mediagrid.css';

function Mediagrid(props) {

    const {mediaList, show} = props;
    const mediaGrid = mediaList.length ? (
        mediaList.map(media => {
            return (
                <div className="cell" key={media.id}>
                    <img src={media.thumbnail} className="responsive-img" alt={media.title}  />
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