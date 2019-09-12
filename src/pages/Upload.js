import React, { Component } from  'react';
import M from "materialize-css";

class Upload extends Component {

    componentDidMount() {
        M.updateTextFields();
        M.CharacterCounter.init(document.querySelectorAll('input[name=title],textarea[name=description]'));
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log('KIMMY',e);
    }

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
                                    <label htmlFor="input_text">Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    name="description"
                                    className="materialize-textarea"
                                    data-length="120"
                                    onChange={this.handleChange}/>
                                <label htmlFor="textarea2">Description</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="url"
                                    type="text"
                                    data-length="10"
                                    onChange={this.handleChange}/>
                                <label htmlFor="input_text">Url</label>
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

export default Upload;