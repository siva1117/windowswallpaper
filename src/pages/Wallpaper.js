//Lib imports
import React, { Component } from 'react';
import Axios from 'axios';

//Custom Imports
import Comments from '../components/Comments'

class Wallpaper extends Component {

    state = {
        id: null,
        wallpaper : {},
        comments: []
    };

    componentDidMount() {
        let wallpaperId = this.props.match.params.id;

        this.setState({
            id: wallpaperId
        });

        Axios.get(`http://localhost:5000/api/v1/wallpaper?id=${wallpaperId}`)
            .then(res => {
                this.setState({
                    wallpaper: res.data[0]
                });
            })
            .catch(err => console.log(err));

        Axios.get(`http://localhost:5000/api/v1/comments?id=${wallpaperId}`)
            .then(res => {
                this.setState({
                    comments: res.data
                });
            })
            .catch(err => console.log(err))
    }

    render() {
        const wallpaper = this.state.wallpaper;
        const comments = this.state.comments;

        return wallpaper ? (
                    <div className="container">
                        <h2> {wallpaper.title} </h2>
                        <div className="row">
                            <div className="col s8">
                                <img src={wallpaper.url} alt={wallpaper.title} className="responsive-img" />
                            </div>
                            <div className="col s4">
                                <p>Todo Media grid from same category should be placed here</p>
                            </div>
                </div>
                <h3>Comments</h3>
                <div>Add Comment Component should come here </div>
                <Comments comments={comments}/>
            </div>
        ) : (
            <div className="center">No Info available</div>
        );
    }
}


export default Wallpaper;