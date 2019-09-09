import React, { Component } from 'react';

class Wallpaper extends Component {

    state = {
        wallpaper : {}
    };

    componentDidMount() {
        console.log('Kim ' ,this.state, this.props);
    }

    render() {
        return (
            <div className="container">
                <h2>Kim de Rome </h2>
                <div className="row">
                    <div className="col s8">
                        <img src="https://placeimg.com/1980/1080/any" alt="Kim" className="responsive-img" />
                    </div>
                    <div className="col s4">
                        <p>Media grid from same category should be placed here</p>
                    </div>
                </div>
                <h3>Comments</h3>
                <div>Add Comment Component should come here </div>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src="https://placeimg.com/1980/1080/any" alt="" className="circle" />
                        <span className="title">Title</span>
                        <p>First Line <br/>
                            Second Line
                        </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle">folder</i>
                        <span className="title">Title</span>
                        <p>First Line <br/>
                            Second Line
                        </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle green">insert_chart</i>
                        <span className="title">Title</span>
                        <p>First Line <br/>
                            Second Line
                        </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle red">play_arrow</i>
                        <span className="title">Title</span>
                        <p>First Line <br/>
                            Second Line
                        </p>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Wallpaper;