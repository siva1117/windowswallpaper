//Lib imports
import React, { Component } from  'react';
import { connect } from 'react-redux';
import M from "materialize-css";

//Custom Imports
import { createWallpaper } from '../redux/actions/wallpaperActions';

class Upload extends Component {

    state = {
        title: '',
        description: '',
        url: ''
    };

    componentDidMount() {
        M.updateTextFields();
        M.CharacterCounter.init(document.querySelectorAll('input[name=title],textarea[name=description]'));
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createWallpaper(this.state)
    };

    render(){
        return (
            <div className="container">
                <h2>Upload Wallpaper</h2>

                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="title"
                                    type="text"
                                    data-length="10"
                                    onChange={this.handleChange}/>
                                    <label htmlFor="title">Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    name="description"
                                    className="materialize-textarea"
                                    data-length="120"
                                    onChange={this.handleChange}/>
                                <label htmlFor="description">Description</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="url"
                                    type="text"
                                    data-length="10"
                                    onChange={this.handleChange}/>
                                <label htmlFor="url">Image Url</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="thumbnail"
                                    type="text"
                                    data-length="10"
                                    onChange={this.handleChange}/>
                                <label htmlFor="thumbnail">Thumbnail Url</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-large waves-effect waves-light" type="submit" name="submit">Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createWallpaper: (wallpaper) => dispatch(createWallpaper(wallpaper))
    }
};

export default connect(null, mapDispatchToProps)(Upload);