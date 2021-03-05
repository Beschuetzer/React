import React from 'react';
import './css/VideoItem.css';

export default class VideoItem extends React.Component {
    constructor() {
        super();
        this.state = {
         
        };
    }
    render() {
        return (
            <div className="item video-item">
                {/* <i className="large github middle aligned icon"></i> */}
                <img src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.description}/>

                <div className="content">
                    <a href="/" className="header">{this.props.video.snippet.title}</a>
                </div>
            </div>
        );
    }
}